import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.filterBtnBackground,
    },
    activeText: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: 'bold',
    },
    text: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'bold',
    },
    activeContainer: {
        backgroundColor: COLORS.lime,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
    },
});

export default styles;
