import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'regular',
        color: COLORS.black,
        borderBottomWidth: 0.5,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    opaque: {
        opacity: 1,
    },
    translucent: {
        opacity: 0.7,
        backgroundColor: COLORS.grey,
    },
});

export default styles;
