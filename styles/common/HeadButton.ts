import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
    },
    txt: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'regular',
    },
    inactiveBtn: {
        backgroundColor: COLORS.lightHeadBtn,
    },
});

export default styles;
