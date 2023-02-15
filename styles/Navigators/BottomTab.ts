import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: COLORS.selected,
        minHeight: 53,
        paddingBottom: 14,
    },
    tabLabel: {
        color: COLORS.white,
        fontSize: 8,
        fontFamily: 'regular',
    },
});

export default styles;
