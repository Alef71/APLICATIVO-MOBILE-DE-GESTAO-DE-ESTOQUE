import { Text, View } from 'react-native';
import { colors } from '../../global/theme';
import { styles } from './styles';

interface StockBadgeProps {
  quantity: number;
}

export function StockBadge({ quantity }: StockBadgeProps) {
  const isOutOfStock = quantity === 0;
  const isLowStock = quantity > 0 && quantity <= 5;
  const label = isOutOfStock
    ? 'Esgotado'
    : isLowStock
      ? 'Reposição'
      : 'Saudável';

  return (
    <View
      style={[
        styles.badge,
        isOutOfStock
          ? styles.outOfStock
          : isLowStock
            ? styles.lowStock
            : styles.healthy,
      ]}
    >
      <View
        style={[
          styles.dot,
          {
            backgroundColor: isOutOfStock
              ? colors.danger
              : isLowStock
                ? colors.ochre
                : colors.green,
          },
        ]}
      />
      <Text
        style={[
          styles.label,
          isOutOfStock
            ? styles.outOfStockText
            : isLowStock
              ? styles.lowStockText
              : styles.healthyText,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}
