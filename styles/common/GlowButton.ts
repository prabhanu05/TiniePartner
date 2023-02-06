import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        width: '100%',
        paddingVertical: 9,
        opacity: 1,
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10,
    },
    txt: {
        fontFamily: 'regular',
        fontSize: 12,
        color: COLORS.black,
    },
    active: {
        opacity: 0.7,
    },
});

export default styles;
