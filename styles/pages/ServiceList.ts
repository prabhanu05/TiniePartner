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
    },
    border: {
        height: 1,
        backgroundColor: COLORS.black,
        marginHorizontal: 12,
    },
    card: {
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 10,
        backgroundColor: COLORS.card,
        padding: 10,
    },
    cardImage: {
        height: 90,
        width: 90,
    },
    cardUpperHolder: {
        flexDirection: 'row',
        columnGap: 8,
        width: '100%',
    },
    cardUpperRow: {
        flex: 1,
        rowGap: 15,
    },
    tags: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 12,
        flexWrap: 'wrap',
    },
    tag: {
        color: COLORS.black,
        padding: 10,
        fontSize: 10,
        fontFamily: 'regular',
        borderRadius: 10,
        backgroundColor: COLORS.pink,
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    serviceName: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: 'bold',
        paddingStart: 6,
    },
    serviceTime: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'semibold',
    },
    menuRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 28,
    },
    menuItem: {
        flex: 1,
        alignItems: 'center',
        rowGap: 12,
    },
    menuTitle: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 10,
    },
    menuPrice: {
        fontSize: 12,
        color: COLORS.black,
        fontFamily: 'bold',
    },
    description: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'regular',
        paddingStart: 6,
    },
    descriptionBox: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: COLORS.black,
        borderRadius: 10,
        marginVertical: 10,
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'regular',
    },
    justifiedRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    serviceBtn: {
        backgroundColor: COLORS.white,
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'regular',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default styles;
