import { colors } from "../../utils/colors";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        width: '45%',
        backgroundColor: colors.darkGrey,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 50,
    },
    image: {
        width: 30,
        height: 30,
    }
});

export default styles;