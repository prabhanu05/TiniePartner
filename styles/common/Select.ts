import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderRadius: 9,
        paddingVertical: 14,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: COLORS.grey,
        color: COLORS.black,
    },
    dateTxt: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 12,
    },
    label: {
        fontFamily: 'regular',
        fontSize: 12,
        position: 'absolute',
        zIndex: 1,
        top: -10,
        left: 8,
        backgroundColor: COLORS.white,
        borderRadius: 6,
        paddingVertical: 1,
        paddingHorizontal: 4,
    },
    dateContainer: {
        marginVertical: 16,
        position: 'relative',
        justifyContent: 'center',
    },
    dateHolder: {
        justifyContent: 'center',
    },
    mainHolder: {
        position: 'relative',
        marginVertical: 16,
    },
    optionBox: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        zIndex: 99,
        borderWidth: 0.5,
        borderColor: COLORS.black,
        position: 'absolute',
        width: '100%',
        top: 50,
        overflow: 'hidden',
    },
    holder: {
        position: 'relative',
    },
    list: {
        backgroundColor: COLORS.primary,
        zIndex: 99,
        borderWidth: 0.5,
        borderColor: COLORS.black,
        overflow: 'hidden',
    },
    containerModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.backdrop,
    },
    overlay: {
        backgroundColor: COLORS.white,
        borderRadius: 8,
        width: '90%',
        maxHeight: '90%',
        overflow: 'hidden',
    },
    txt: {
        color: COLORS.placeholder,
        fontSize: 14,
        fontFamily: 'regular',
        position: 'absolute',
        left: 10,
    },
});

export default styles;
