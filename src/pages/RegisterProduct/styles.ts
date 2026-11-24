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
    paddingBottom: spacing.lg,
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
  tipCard: {
    flexDirection: 'row',
    gap: spacing.sm,
    borderRadius: radius.md,
    backgroundColor: '#F2E5D4',
    padding: spacing.md,
  },
  tipIcon: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
  },
  tipCopy: {
    flex: 1,
    gap: 4,
  },
  tipTitle: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '800',
  },
  tipText: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17,
  },
  formCard: {
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    padding: spacing.md,
  },
  formTitle: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '800',
  },
  fields: {
    gap: spacing.md,
  },
  formHint: {
    color: colors.muted,
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
  },
});
