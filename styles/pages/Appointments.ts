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
    justifiedRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
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
});

export default styles;
