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
});

export default styles;
