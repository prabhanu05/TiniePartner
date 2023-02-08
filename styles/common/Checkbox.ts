import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 20,
        width: 20,
        borderColor: COLORS.grey,
        borderWidth: 0.5,
    },
    active: {
        backgroundColor: COLORS.selected,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
