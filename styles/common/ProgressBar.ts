import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    row: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    txt: {
        paddingHorizontal: 9,
        color: COLORS.black,
        fontSize: 10,
        fontFamily: 'regular',
    },
    inactiveTxt: {
        paddingHorizontal: 9,
        color: COLORS.grey,
        fontSize: 10,
        fontFamily: 'regular',
    },
});

export default styles;
