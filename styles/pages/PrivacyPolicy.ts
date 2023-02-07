import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    list: {
        paddingVertical: 24,
    },
    para: {
        paddingVertical: 12,
    },
    heading: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'bold',
    },
    body: {
        color: COLORS.black,
        fontSize: 12,
        fontFamily: 'regular',
    },
});

export default styles;
