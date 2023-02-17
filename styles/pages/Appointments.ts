import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 16,
    },
    appointmentContainer: {
        paddingVertical: 12,
    },
    gradientContainer: {
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: COLORS.appointmentBorder,
    },
    reedemGradientContainer: {
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: COLORS.reedemBorder,
    },
    justifiedRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    justifiedReedemRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },
    name: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'medium',
    },
    slot: {
        color: COLORS.black,
        fontSize: 8,
        fontFamily: 'regular',
        paddingHorizontal: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    slotBox: {
        padding: 10,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 5,
        marginHorizontal: 3,
    },
    slotTxt: {
        color: COLORS.black,
        fontSize: 8,
        fontFamily: 'regular',
    },
    dateTime: {
        color: COLORS.black,
        fontFamily: 'semibold',
        fontSize: 8,
        paddingHorizontal: 10,
        paddingVertical: 2.5,
    },
    tagHolder: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    tag: {
        color: COLORS.black,
        padding: 10,
        marginHorizontal: 3,
        fontSize: 10,
        fontFamily: 'regular',
    },
    bottomRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    phoneCall: {
        paddingVertical: 10,
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
    idHolder: {
        flex: 0.35,
    },
    smallRow: {
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 4,
    },
    subHeading: {
        color: COLORS.black,
        fontSize: 8,
        fontFamily: 'regular',
    },
    heading: {
        color: COLORS.black,
        fontSize: 10,
        fontFamily: 'medium',
    },
    reedemHolder: {
        flex: 0.55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    qty: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 10,
    },
    reedemTxt: {
        color: COLORS.reedemText,
        fontFamily: 'semibold',
        fontSize: 10,
        paddingRight: 11,
    },
    price: {
        color: COLORS.black,
        fontFamily: 'medium',
        fontSize: 10,
    },
    priceNum: {
        padding: 6.5,
        color: COLORS.black,
        fontFamily: 'semibold',
        fontSize: 10,
    },
    priceContainer: {
        alignItems: 'center',
    },
});

export default styles;
