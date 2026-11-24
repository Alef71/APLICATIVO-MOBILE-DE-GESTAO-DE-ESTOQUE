import { StyleSheet } from 'react-native';
import { colors, radius } from '../../global/theme';

export const styles = StyleSheet.create({
  button: {
    minHeight: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
  },
  pressed: {
    backgroundColor: colors.primaryDark,
  },
  disabled: {
    opacity: 0.65,
  },
  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '800',
  },
});
