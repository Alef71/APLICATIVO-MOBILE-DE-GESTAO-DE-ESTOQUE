import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { formatCurrency } from '../../global/formatters';
import { colors } from '../../global/theme';
import { Product } from '../../global/types';
import { StockBadge } from '../StockBadge';
import { styles } from './styles';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.productIdentity}>
          <View style={styles.iconBox}>
            <Ionicons name="cube-outline" size={20} color={colors.primary} />
          </View>
          <View style={styles.nameBlock}>
            <Text style={styles.name} numberOfLines={1}>
              {product.name}
            </Text>
            <Text style={styles.price}>{formatCurrency(product.price)}</Text>
          </View>
        </View>
        <StockBadge quantity={product.quantity} />
      </View>
      <View style={styles.divider} />
      <View style={styles.quantityRow}>
        <Text style={styles.quantityCaption}>Disponível no estoque</Text>
        <Text style={styles.quantity}>
          {product.quantity} <Text style={styles.unit}>un.</Text>
        </Text>
      </View>
    </View>
  );
}
