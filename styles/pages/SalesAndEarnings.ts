import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 16,
    },
    filterBtnHolder: {
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 18,
    },
    saleContainer: {
        borderTopWidth: 1,
        borderTopColor: COLORS.black,
    },
    saleRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: COLORS.black,
        paddingVertical: 10,
    },
    saleHeaderRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 8,
    },
    headerText: {
        color: COLORS.navyBlue,
        fontFamily: 'semibold',
        fontSize: 14,
        textAlign: 'center',
    },
    bigBox: {
        width: '40%',
    },
    smallBox: {
        width: '25%',
    },
    extraSmallBox: {
        width: '10%',
    },
    saleText: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 14,
        textAlign: 'center',
    },
    empty: {
        color: COLORS.black,
        fontSize: 18,
        fontFamily: 'regular',
        paddingTop: 33,
        textAlign: 'center',
        width: '60%',
        alignSelf: 'center',
    },
});

export default styles;
