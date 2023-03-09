import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 16,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backBtn: {
        paddingEnd: 16,
        paddingStart: 6,
    },
    screenName: {
        fontFamily: 'semibold',
        color: COLORS.black,
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

export default styles;
