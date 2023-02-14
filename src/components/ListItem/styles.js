import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
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
    title: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    subtitle: {
        color: colors.grey,
        fontSize: 12,
    },
    arrow: {
        width: 32,
        height: 32,
    }
})