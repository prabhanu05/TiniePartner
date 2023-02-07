import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 20,
        width: 20,
        borderColor: COLORS.grey,
        borderWidth: 1,
    },
    active: {
        backgroundColor: COLORS.selected,
    },
});

export default styles;
