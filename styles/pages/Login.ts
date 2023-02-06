import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    subContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 20,
    },
    txt: {
        fontFamily: 'regular',
        fontSize: 12,
        color: COLORS.black,
    },
    borderText: {
        textDecorationLine: 'underline',
    },
    passcodeHolder: {
        width: '80%',
        backgroundColor: COLORS.passcode,
        borderRadius: 10,
        paddingHorizontal: 23,
    },
    passHeading: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: 'regular',
        paddingVertical: 9,
        textAlign: 'center',
    },
    passcodeInput: {
        width: 26,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white,
        marginHorizontal: 8,
        textAlign: 'center',
        color: COLORS.white,
        fontFamily: 'medium',
    },
    passcodeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 54,
    },
    forgotPass: {
        textAlign: 'right',
        color: COLORS.white,
        fontFamily: 'regular',
        fontSize: 10,
        marginBottom: 60,
    },
    reset: {
        fontFamily: 'medium',
        textDecorationLine: 'underline',
    },
    col: {
        width: '48%',
    },
    cancel: {
        color: COLORS.white,
        fontSize: 12,
        fontFamily: 'regular',
        textAlign: 'center',
    },
});

export default styles;
