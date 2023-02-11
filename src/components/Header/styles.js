import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    // paddingHorizontal: 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    fontFamily: 'Product Sans'
  },
  icon: {
    width: 24,
    height: 24,
  },
  space: {
    width: 24,
  }
});

export default styles;
