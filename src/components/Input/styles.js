import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginVertical: 8,
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
  arrow: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
    transform: [{ rotate: '90deg' }]
  },
  placeholder: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    color: colors.lightGrey,
  },
  modalWraper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalContant: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    width: '80%'
  },
  headerTitle: {
    color: colors.black,
    marginBottom: 16,
    fontSize: 16,
  },
  optionText: {
    color: colors.black,
    paddingVertical: 4,
    fontSize: 15,
  },
  selectedOption: {
    color: colors.blue,
    fontWeight: 'bold',

  }
});

export default styles;
