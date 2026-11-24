import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../global/theme';

export const styles = StyleSheet.create({
  card: {
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    padding: spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  productIdentity: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  iconBox: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: '#F6E8DC',
  },
  nameBlock: {
    flex: 1,
    gap: 3,
  },
  name: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '800',
  },
  price: {
    color: colors.muted,
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: colors.line,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityCaption: {
    color: colors.muted,
    fontSize: 12,
  },
  quantity: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '900',
  },
  unit: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '600',
  },
});
