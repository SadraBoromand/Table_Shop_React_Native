import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    height: '100%',
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 13,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
  },
  footerText: {
    color: colors.blue,
    marginBottom: 56,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold'
  }
});

export default styles;
