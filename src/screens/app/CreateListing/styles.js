import { colors } from "../../../utils/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 14,
        color: colors.blue,
        marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 6,
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grey,
        borderStyle: "dotted",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginRight: 8,
        marginTop: 8,
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.lightGrey,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    uploadPlus: {
        color: colors.white,
        fontSize: 28,
        marginTop: -4,
    },
    imageRow: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: 'wrap',
        paddingBottom: 24,
    },
    imageCont: {
        flexDirection: 'row',
        marginRight: 8,
        marginTop: 8,
    },
    delete: {
        width: 24,
        height: 24,
        marginLeft: -16,
        marginTop: -10
    },
    textarea: {
        minHeight: 150,
        paddingTop: 16,
    },
    button: {
        marginBottom: 160,
    }
})

export default styles;