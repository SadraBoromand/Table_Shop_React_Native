import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // margin: 8,
    padding: 8,
    maxWidth: (width / 2)-24,
    flex: 1,
  },
  title: {
    color: colors.textGrey,
    paddingVertical: 8,
  },
  image: {
    // width: (width -100) / 2,
    height: 220,
    borderRadius: 8
  },
  price: {
    color: colors.black,
    marginBottom: 8,
  },
});

export default styles;
