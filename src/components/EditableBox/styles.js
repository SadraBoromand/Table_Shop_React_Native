import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: colors.white,
        marginVertical: 12,
        marginHorizontal: 5,
        borderRadius: 4,
    },
    label: {
        marginBottom: 6,
        color: colors.grey,
        fontSize: 12,
    },
    input: {
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500'
    }
})