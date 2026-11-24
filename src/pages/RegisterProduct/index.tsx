import { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomInput } from '../../components/CustomInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useStock } from '../../context/StockContext';
import { colors } from '../../global/theme';
import { styles } from './styles';

export function RegisterProduct() {
  const { addProduct } = useStock();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  function handleRegister() {
    const parsedPrice = Number(price.trim().replace(',', '.'));
    const parsedQuantity = Number(quantity.trim());

    if (!name.trim()) {
      Alert.alert('Nome obrigatório', 'Informe o nome do produto.');
      return;
    }

    if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
      Alert.alert('Preço inválido', 'Informe um preço maior que zero.');
      return;
    }

    if (!Number.isInteger(parsedQuantity) || parsedQuantity < 0) {
      Alert.alert('Quantidade inválida', 'Informe um número inteiro igual ou maior que zero.');
      return;
    }

    addProduct({
      name: name.trim(),
      price: parsedPrice,
      quantity: parsedQuantity,
    });

    Alert.alert('Produto cadastrado', `${name.trim()} já está no seu estoque.`);
    setName('');
    setPrice('');
    setQuantity('');
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.pageHeader}>
          <Text style={styles.eyebrow}>SEU NEGÓCIO, BEM CUIDADO</Text>
          <Text style={styles.title}>Novo produto</Text>
          <Text style={styles.subtitle}>
            Cadastre uma peça e acompanhe tudo de perto.
          </Text>
        </View>

        <View style={styles.tipCard}>
          <View style={styles.tipIcon}>
            <Ionicons name="sparkles-outline" size={20} color={colors.primary} />
          </View>
          <View style={styles.tipCopy}>
            <Text style={styles.tipTitle}>Cada peça tem seu valor</Text>
            <Text style={styles.tipText}>
              Informe o preço de venda e a quantidade disponível para começar.
            </Text>
          </View>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Informações do produto</Text>
          <View style={styles.fields}>
            <CustomInput
              label="Nome do produto"
              value={name}
              onChangeText={setName}
              placeholder="Ex.: Vaso de cerâmica"
              icon="pricetag-outline"
            />
            <CustomInput
              label="Preço de venda"
              value={price}
              onChangeText={setPrice}
              placeholder="0,00"
              icon="cash-outline"
              keyboardType="decimal-pad"
            />
            <CustomInput
              label="Quantidade inicial"
              value={quantity}
              onChangeText={setQuantity}
              placeholder="Ex.: 10"
              icon="layers-outline"
              keyboardType="number-pad"
            />
          </View>
          <PrimaryButton title="Cadastrar produto" onPress={handleRegister} />
          <Text style={styles.formHint}>
            O estoque será atualizado automaticamente em todas as telas.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
