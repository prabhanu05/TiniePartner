import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    subcontainer: {
        flex: 1,
        padding: 16,
    },
    txt: {
        fontFamily: 'regular',
        fontSize: 12,
        textAlign: 'right',
        marginVertical: 13,
        color: COLORS.black,
    },
    borderText: {
        textDecorationLine: 'underline',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn: {
        alignSelf: 'center',
    },
    mt40: {
        marginTop: 40,
    },
});

export default styles;
