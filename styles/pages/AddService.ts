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
        paddingBottom: 12,
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
    addToList: {
        fontSize: 12,
        fontFamily: 'regular',
        color: COLORS.addGrey,
        textAlign: 'right',
    },
    productRow: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 30,
        width: '100%',
    },
    imageText: {
        textAlign: 'right',
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'semibold',
    },
    appPrice: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.appPriceBox,
        flexDirection: 'row',
        width: 185,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    appPriceTxt: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'medium',
    },
    appPriceNum: {
        fontSize: 16,
        color: COLORS.appPrice,
        fontFamily: 'semibold',
    },
    btn: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.black,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
    btnTxt: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'regular',
    },
    translucent: {
        opacity: 0.7,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
        paddingVertical: 10,
    },
    list: {
        paddingBottom: 120,
    },
    popupHeading: {
        fontSize: 16,
        color: COLORS.white,
        fontFamily: 'semibold',
        alignSelf: 'flex-start',
    },
    popupTextfield: {
        borderRadius: 10,
        padding: 16,
        color: COLORS.black,
        backgroundColor: COLORS.input,
        fontFamily: 'regular',
        fontSize: 14,
        width: '100%',
    },
    cancelBtn: {
        paddingVertical: 9,
        borderRadius: 5,
        backgroundColor: COLORS.placeholder,
        flex: 1,
    },
    createBtn: {
        paddingVertical: 9,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        flex: 1,
    },
    cancelTxt: {
        textAlign: 'center',
        color: COLORS.white,
        fontSize: 12,
        fontFamily: 'regular',
    },
    createTxt: {
        textAlign: 'center',
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'regular',
    },
    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 44,
    },
    emptyContainer: {
        padding: 16,
        backgroundColor: COLORS.black,
        justifyContent: 'space-between',
        minHeight: 120,
    },
    emptyText: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: 'semibold',
        textAlign: 'center',
    },
    emptyBtn: {
        alignSelf: 'center',
    },
    error: {
        color: COLORS.white,
        fontSize: 12,
        fontFamily: 'regular',
        alignSelf: 'flex-start',
        paddingVertical: 2,
    },
    serviceCreatedTxt: {
        fontSize: 16,
        color: COLORS.white,
        fontFamily: 'semibold',
        paddingTop: 20,
    },
    helperTxt: {
        fontSize: 12,
        color: COLORS.white,
        fontFamily: 'medium',
        paddingBottom: 50,
    },
    image: {
        maxHeight: 90,
        maxWidth: 90,
        height: '100%',
        width: '100%',
        alignSelf: 'flex-end',
        marginVertical: 6,
    },
    imageActions: {
        flexDirection: 'row',
        columnGap: 35,
        alignSelf: 'flex-end',
    },
    pb50: {
        paddingBottom: 50,
    },
});

export default styles;
