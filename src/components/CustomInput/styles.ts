import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../global/theme';

export const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.xs,
  },
  label: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '700',
  },
  inputContainer: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
  },
  inputError: {
    borderColor: colors.danger,
  },
  input: {
    flex: 1,
    minHeight: 52,
    color: colors.ink,
    fontSize: 15,
    paddingVertical: spacing.sm,
  },
  errorText: {
    color: colors.danger,
    fontSize: 12,
  },
});
