import { Ionicons } from '@expo/vector-icons';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductCard } from '../../components/ProductCard';
import { useStock } from '../../context/StockContext';
import { formatCurrency } from '../../global/formatters';
import { colors } from '../../global/theme';
import { Product } from '../../global/types';
import { styles } from './styles';

interface MetricCardProps {
  label: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
  accent?: boolean;
}

function MetricCard({ label, value, icon, accent = false }: MetricCardProps) {
  return (
    <View style={[styles.metricCard, accent ? styles.metricCardAccent : null]}>
      <Ionicons
        name={icon}
        size={18}
        color={accent ? colors.primary : colors.green}
      />
      <Text style={[styles.metricValue, accent ? styles.metricValueAccent : null]}>
        {value}
      </Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

export function StockList() {
  const { products } = useStock();
  const totalUnits = products.reduce((total, product) => total + product.quantity, 0);
  const lowStockCount = products.filter(
    (product) => product.quantity <= 5,
  ).length;
  const inventoryValue = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  const header = (
    <View style={styles.listHeader}>
      <View style={styles.pageHeader}>
        <Text style={styles.eyebrow}>VISÃO GERAL</Text>
        <Text style={styles.title}>Seu estoque</Text>
        <Text style={styles.subtitle}>
          Um retrato atualizado de cada peça do seu negócio.
        </Text>
      </View>

      <View style={styles.metricsRow}>
        <MetricCard label="Produtos" value={String(products.length)} icon="cube-outline" />
        <MetricCard label="Unidades" value={String(totalUnits)} icon="layers-outline" />
        <MetricCard
          label="Atenção"
          value={String(lowStockCount)}
          icon="alert-circle-outline"
          accent={lowStockCount > 0}
        />
      </View>

      <View style={styles.valueCard}>
        <View style={styles.valueIcon}>
          <Ionicons name="wallet-outline" size={18} color={colors.white} />
        </View>
        <View style={styles.valueCopy}>
          <Text style={styles.valueLabel}>Valor estimado em estoque</Text>
          <Text style={styles.valueAmount}>{formatCurrency(inventoryValue)}</Text>
        </View>
        <Ionicons name="trending-up-outline" size={20} color="#E8C486" />
      </View>

      <View style={styles.sectionHeading}>
        <Text style={styles.sectionTitle}>Produtos cadastrados</Text>
        <Text style={styles.countText}>{products.length} itens</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <FlatList<Product>
        data={products}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        ListHeaderComponent={header}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="basket-outline" size={34} color={colors.muted} />
            <Text style={styles.emptyTitle}>Seu estoque está vazio</Text>
            <Text style={styles.emptyText}>
              Cadastre seu primeiro produto na aba ao lado.
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
