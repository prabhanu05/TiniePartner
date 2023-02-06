import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        width: 230,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        paddingVertical: 14,
        marginVertical: 15,
        opacity: 1,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
    },
    txt: {
        fontFamily: 'regular',
        fontSize: 18,
        color: COLORS.black,
    },
    active: {
        opacity: 0.7,
    },
});

export default styles;
