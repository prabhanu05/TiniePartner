import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        borderRadius: 30,
        backgroundColor: COLORS.black,
        rowGap: 40,
        justifyContent: 'center',
        minHeight: 190,
        width: '80%',
    },
    text: {
        color: COLORS.white,
        fontFamily: 'semibold',
        fontSize: 16,
        textAlign: 'center',
    },
    btnRow: {
        columnGap: 9,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default styles;
