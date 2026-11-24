import { StyleSheet } from 'react-native';
import { colors } from '../global/theme';

export const styles = StyleSheet.create({
  tabBar: {
    height: 68,
    borderTopColor: colors.line,
    backgroundColor: colors.surface,
    paddingTop: 7,
    paddingBottom: 8,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
  tabItem: {
    paddingVertical: 2,
  },
});
