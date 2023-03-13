import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 16,
    },
    selectBtn: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 10,
        padding: 6,
        backgroundColor: COLORS.smallBtnBg,
        borderRadius: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    end: {
        justifyContent: 'flex-end',
    },
    singleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    w100: {
        width: '100%',
    },
    txt: {
        color: COLORS.black,
        fontSize: 10,
        fontFamily: 'regular',
    },
    gap10: {
        columnGap: 10,
    },
    actionBtn: {
        minHeight: 33,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.smallBtnBg,
        borderRadius: 15,
        paddingHorizontal: 8,
    },
});

export default styles;
