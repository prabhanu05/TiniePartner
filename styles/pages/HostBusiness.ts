import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    list: {
        padding: 16,
    },
    txt: {
        fontFamily: 'regular',
        fontSize: 12,
        color: COLORS.black,
    },
    borderText: {
        textDecorationLine: 'underline',
    },
    mv10: {
        marginVertical: 10,
    },
    rightAligned: {
        textAlign: 'right',
    },
    row: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    button: {
        alignSelf: 'center',
    },
    modalContainer: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        width: '80%',
        alignItems: 'center',
        paddingVertical: 46,
    },
    modalTxt: {
        color: COLORS.black,
        paddingVertical: 20,
        fontSize: 16,
        fontFamily: 'regular',
        width: '70%',
        textAlign: 'center',
    },
    pv20: {
        paddingVertical: 20,
    },
});

export default styles;
