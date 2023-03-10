import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '85%',
        alignItems: 'center',
        padding: 21,
        borderRadius: 30,
        backgroundColor: COLORS.black,
        minHeight: 190,
        justifyContent: 'space-between',
    },
});

export default styles;
