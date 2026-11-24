import { StyleSheet } from 'react-native';
import { colors, radius } from '../../global/theme';

export const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  healthy: {
    backgroundColor: colors.greenSoft,
  },
  lowStock: {
    backgroundColor: '#FFF2D8',
  },
  outOfStock: {
    backgroundColor: colors.dangerSoft,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: radius.pill,
  },
  label: {
    fontSize: 11,
    fontWeight: '800',
  },
  healthyText: {
    color: colors.green,
  },
  lowStockText: {
    color: '#8D611B',
  },
  outOfStockText: {
    color: colors.danger,
  },
});
