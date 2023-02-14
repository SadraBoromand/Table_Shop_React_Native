import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/colors';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.45,
  },
  list: {
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
  },
  paginationLine: {
    height: 4,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.white
  },
  activeLine: {
    backgroundColor: colors.black,
    width: 30
  }
});

export default styles;
