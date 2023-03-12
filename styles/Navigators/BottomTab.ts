import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: COLORS.selected,
        minHeight: 53,
        paddingTop: 7,
        paddingBottom: 14,
    },
    tabLabel: {
        color: COLORS.white,
        fontSize: 8,
        fontFamily: 'regular',
    },
    hideLabel: {
        display: 'none',
    },
});

export default styles;
