import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    list: {
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    subContainer: {
        flex: 1,
    },
    heading: {
        paddingTop: 28,
        color: COLORS.black,
        fontFamily: 'bold',
        fontSize: 16,
    },
    subheading: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 16,
        paddingBottom: 17,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 17,
    },
    col: {
        paddingVertical: 17,
    },
    txt: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: 'regular',
        maxWidth: '90%',
    },
    holder: {
        flex: 1,
    },
    subtxt: {
        fontFamily: 'regular',
        fontSize: 11,
        color: COLORS.black,
        maxWidth: '90%',
    },
    textArea: {
        padding: 8,
        color: COLORS.black,
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 4,
    },
    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 18,
    },
    btnCol: {
        width: '45%',
    },
});

export default styles;
