import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 21,
        borderRadius: 30,
        backgroundColor: COLORS.black,
        minHeight: 200,
        justifyContent: 'space-between',
    },
    keyboardView: {
        width: '85%',
    },
});

export default styles;
