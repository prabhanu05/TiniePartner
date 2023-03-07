import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 8,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingBottom: 8,
    },
    addServiceBtn: {
        color: COLORS.black,
        fontFamily: 'semibold',
        fontSize: 12,
    },
});

export default styles;
