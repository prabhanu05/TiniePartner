import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 16,
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    permissionTxt: {
        color: COLORS.black,
        fontFamily: 'bold',
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 20,
    },
    barcodeContainer: {
        flex: 1,
    },
    btn: {
        alignSelf: 'center',
    },
});

export default styles;
