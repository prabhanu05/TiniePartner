import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    list: {
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    para: {
        paddingVertical: 12,
    },
    heading: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'bold',
    },
    body: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'regular',
    },
    link: {
        textDecorationLine: 'underline',
    },
    btn: {
        alignSelf: 'center',
    },
    pv30: {
        paddingVertical: 30,
    },
    checkboxRow: {
        paddingVertical: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    term: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: 'regular',
        paddingHorizontal: 8,
    },
});

export default styles;
