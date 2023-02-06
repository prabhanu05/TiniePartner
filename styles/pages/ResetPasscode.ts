import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    subcontainer: {
        flex: 1,
        padding: 26,
        justifyContent: 'center',
    },
    txt: {
        fontFamily: 'medium',
        fontSize: 14,
        color: COLORS.black,
        textAlign: 'center',
    },
    subTxt: {
        fontFamily: 'regular',
        fontSize: 10,
    },
    miniContainer: {
        width: '50%',
        alignSelf: 'center',
        paddingVertical: 8,
    },
    cancel: {
        paddingBottom: 27,
        paddingTop: 4,
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 12,
    },
    btn: {
        alignSelf: 'center',
    },
    modalTxt: {
        color: COLORS.white,
        fontFamily: 'medium',
        fontSize: 18,
        marginBottom: 32,
    },
    modalHolder: {
        borderRadius: 10,
        backgroundColor: COLORS.passcode,
        borderWidth: 1,
        borderColor: COLORS.primaryBorder,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 16,
    },
});

export default styles;
