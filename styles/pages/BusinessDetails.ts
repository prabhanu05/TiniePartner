import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    p16: {
        padding: 16,
    },
    box: {
        padding: 16,
        borderWidth: 1,
        borderColor: COLORS.detailsBox,
        marginVertical: 16,
    },
    heading: {
        paddingBottom: 16,
        color: COLORS.black,
        fontFamily: 'bold',
        fontSize: 14,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 8,
    },
    colLeft: {
        flex: 2,
    },
    colRight: {
        flex: 3,
    },
    label: {
        color: COLORS.black,
        fontFamily: 'bold',
        fontSize: 12,
    },
    txt: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 12,
    },
    btn: {
        alignSelf: 'center',
        marginVertical: 4,
    },
    list: {
        paddingBottom: 20,
    },
    editHeading: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 16,
        paddingBottom: 16,
    },
    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 30,
        paddingHorizontal: 26,
        paddingVertical: 8,
    },
});

export default styles;
