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
        paddingBottom: 30,
    },
});

export default styles;
