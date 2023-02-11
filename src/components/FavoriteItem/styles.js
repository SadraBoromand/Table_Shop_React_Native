import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        marginHorizontal: 24,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
    },
    title: {
        color: colors.textGrey,
        paddingVertical: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20,
    },
    price: {
        color: colors.black,
        marginBottom: 8,
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 8,
    },
    content: {
        flex: 1,
    }
});

export default styles;
