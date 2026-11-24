import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../global/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  listHeader: {
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  pageHeader: {
    gap: spacing.xs,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  title: {
    color: colors.ink,
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  metricCard: {
    flex: 1,
    minHeight: 94,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    padding: spacing.sm,
  },
  metricCardAccent: {
    borderColor: '#E7CDA9',
    backgroundColor: '#FFF5E7',
  },
  metricValue: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '900',
  },
  metricValueAccent: {
    color: colors.primary,
  },
  metricLabel: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: '700',
  },
  valueCard: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderRadius: radius.md,
    backgroundColor: colors.green,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  valueIcon: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: '#FFFFFF24',
  },
  valueCopy: {
    flex: 1,
    gap: 3,
  },
  valueLabel: {
    color: '#E5E8DD',
    fontSize: 11,
  },
  valueAmount: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.xs,
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '900',
  },
  countText: {
    color: colors.muted,
    fontSize: 12,
  },
  itemSeparator: {
    height: spacing.sm,
  },
  emptyState: {
    alignItems: 'center',
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xl,
  },
  emptyTitle: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: '800',
  },
  emptyText: {
    color: colors.muted,
    fontSize: 12,
    textAlign: 'center',
  },
});
