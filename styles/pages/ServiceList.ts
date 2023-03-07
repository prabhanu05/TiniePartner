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
    filterBtn: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightHeadBtn,
    },
    activeFilterBtn: {
        padding: 10,
        borderRadius: 10,
    },
    filterBtnTxt: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 12,
    },
    filterBtnHolder: {
        gap: 10,
        padding: 8,
        alignSelf: 'flex-start',
    },
});

export default styles;
