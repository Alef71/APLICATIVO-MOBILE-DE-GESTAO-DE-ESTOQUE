import { useMemo, useState } from 'react';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomInput } from '../../components/CustomInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useStock } from '../../context/StockContext';
import { formatCurrency } from '../../global/formatters';
import { colors } from '../../global/theme';
import { styles } from './styles';

export function StockExit() {
  const { products, removeStock } = useStock();
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState('');

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase('pt-BR');
    return products.filter((product) =>
      product.name.toLocaleLowerCase('pt-BR').includes(normalizedSearch),
    );
  }, [products, search]);

  const selectedProduct = products.find((product) => product.id === selectedId);

  function handleExit() {
    if (!selectedProduct) {
      Alert.alert('Selecione um produto', 'Escolha o item que será retirado do estoque.');
      return;
    }

    const parsedQuantity = Number(quantity.trim());
    if (!Number.isInteger(parsedQuantity) || parsedQuantity <= 0) {
      Alert.alert('Quantidade inválida', 'Informe um número inteiro maior que zero.');
      return;
    }

    const result = removeStock(selectedProduct.id, parsedQuantity);
    if (!result.success) {
      const messages = {
        'product-not-found': 'Esse produto não está mais disponível no estoque.',
        'invalid-quantity': 'Informe uma quantidade inteira maior que zero.',
        'insufficient-stock': `Há somente ${selectedProduct.quantity} unidade(s) disponíveis.`,
      };
      Alert.alert('Não foi possível registrar a saída', messages[result.reason]);
      return;
    }

    Alert.alert(
      'Saída registrada',
      `${parsedQuantity} unidade(s) de ${selectedProduct.name} foram retiradas.`,
    );
    setSelectedId(null);
    setQuantity('');
    setSearch('');
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.pageHeader}>
          <Text style={styles.eyebrow}>MOVIMENTAÇÃO DE ESTOQUE</Text>
          <Text style={styles.title}>Registrar saída</Text>
          <Text style={styles.subtitle}>
            Anote cada retirada para manter os números em dia.
          </Text>
        </View>

        <View style={styles.stepHeader}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>1</Text>
          </View>
          <Text style={styles.stepTitle}>Encontre o produto</Text>
        </View>

        <CustomInput
          label="Buscar no estoque"
          value={search}
          onChangeText={setSearch}
          placeholder="Digite o nome do produto"
          icon="search-outline"
          autoCapitalize="none"
        />

        <View style={styles.productChoices}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const isSelected = product.id === selectedId;
              return (
                <Pressable
                  key={product.id}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isSelected }}
                  onPress={() => setSelectedId(product.id)}
                  style={[
                    styles.productChoice,
                    isSelected ? styles.productChoiceSelected : null,
                  ]}
                >
                  <View
                    style={[
                      styles.choiceIcon,
                      isSelected ? styles.choiceIconSelected : null,
                    ]}
                  >
                    <Ionicons
                      name="cube-outline"
                      size={18}
                      color={isSelected ? colors.white : colors.primary}
                    />
                  </View>
                  <View style={styles.choiceCopy}>
                    <Text style={styles.choiceName} numberOfLines={1}>
                      {product.name}
                    </Text>
                    <Text style={styles.choiceMeta}>
                      {product.quantity} un. disponíveis · {formatCurrency(product.price)}
                    </Text>
                  </View>
                  {isSelected ? (
                    <Ionicons name="checkmark-circle" size={22} color={colors.green} />
                  ) : (
                    <Ionicons name="chevron-forward" size={18} color={colors.muted} />
                  )}
                </Pressable>
              );
            })
          ) : (
            <View style={styles.noResults}>
              <Text style={styles.noResultsText}>
                Nenhum produto encontrado com esse nome.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.stepHeader}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>2</Text>
          </View>
          <Text style={styles.stepTitle}>Informe a quantidade</Text>
        </View>

        {selectedProduct ? (
          <View style={styles.selectedSummary}>
            <View style={styles.summaryIcon}>
              <Ionicons name="cube" size={18} color={colors.green} />
            </View>
            <View style={styles.summaryCopy}>
              <Text style={styles.summaryName} numberOfLines={1}>
                {selectedProduct.name}
              </Text>
              <Text style={styles.summaryAvailable}>
                Saldo atual: {selectedProduct.quantity} unidade(s)
              </Text>
            </View>
          </View>
        ) : (
          <Text style={styles.selectHint}>Selecione um produto acima para continuar.</Text>
        )}

        <CustomInput
          label="Quantidade de saída"
          value={quantity}
          onChangeText={setQuantity}
          placeholder="Ex.: 2"
          icon="remove-circle-outline"
          keyboardType="number-pad"
        />

        <View style={styles.warning}>
          <Ionicons name="information-circle-outline" size={18} color={colors.primary} />
          <Text style={styles.warningText}>
            A quantidade não pode ser maior que o saldo disponível.
          </Text>
        </View>

        <PrimaryButton title="Confirmar saída" onPress={handleExit} />
      </ScrollView>
    </SafeAreaView>
  );
}
