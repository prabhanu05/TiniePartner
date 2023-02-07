import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        paddingVertical: 8,
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
    primary: {
        backgroundColor: COLORS.primary,
    },
    secondary: {
        backgroundColor: COLORS.secondaryButton,
    },
    txt: {
        fontFamily: 'regular',
        color: COLORS.black,
        fontSize: 18,
        textAlign: 'center',
    },
    active: {
        opacity: 0.7,
    },
});

export default styles;
