import { colors } from "../../../utils/colors";

const { StyleSheet, Dimensions } = require("react-native");

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    footer: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {

    },
    image: {
        width: '100%',
        height: height * 0.45,
    },
    content: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24,
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500',
        color: colors.black
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
        marginVertical: 8,
    },
    description: {
        color: colors.textGrey,
        fontWeight: '300',
        textAlign: 'justify',
        marginVertical: 8
    },
    bookmarkContainer: {
        backgroundColor: colors.lightGrey,
        padding: 18,
        borderRadius: 8,
        marginRight: 16,
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
    },
    backContainer: {
        backgroundColor: colors.white,
        padding: 10,
        margin: 24,
        borderRadius: 8,
        marginRight: 16,
        position: 'absolute',
    },
    backIcon: {
        width: 20,
        height: 20,
    },
})

export default styles;