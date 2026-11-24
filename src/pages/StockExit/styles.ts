import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../global/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  pageHeader: {
    gap: spacing.xs,
    marginBottom: spacing.xs,
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
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  stepNumber: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
    backgroundColor: colors.green,
  },
  stepNumberText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '900',
  },
  stepTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '800',
  },
  productChoices: {
    gap: spacing.sm,
  },
  productChoice: {
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  productChoiceSelected: {
    borderColor: colors.green,
    backgroundColor: colors.greenSoft,
  },
  choiceIcon: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: '#F6E8DC',
  },
  choiceIconSelected: {
    backgroundColor: colors.green,
  },
  choiceCopy: {
    flex: 1,
    gap: 4,
  },
  choiceName: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '800',
  },
  choiceMeta: {
    color: colors.muted,
    fontSize: 11,
  },
  noResults: {
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    padding: spacing.md,
  },
  noResultsText: {
    color: colors.muted,
    fontSize: 12,
    textAlign: 'center',
  },
  selectedSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderRadius: radius.sm,
    backgroundColor: colors.greenSoft,
    padding: spacing.md,
  },
  summaryIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: colors.white,
  },
  summaryCopy: {
    flex: 1,
    gap: 3,
  },
  summaryName: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '800',
  },
  summaryAvailable: {
    color: colors.green,
    fontSize: 11,
  },
  selectHint: {
    color: colors.muted,
    fontSize: 12,
  },
  warning: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    borderRadius: radius.sm,
    backgroundColor: '#F7EBDD',
    padding: spacing.md,
  },
  warningText: {
    flex: 1,
    color: colors.primaryDark,
    fontSize: 12,
    lineHeight: 17,
  },
});
