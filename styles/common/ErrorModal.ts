import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 30,
        backgroundColor: COLORS.white,
        width: '75%',
        alignItems: 'center',
        paddingVertical: 35,
        paddingHorizontal: 30,
    },
    txt: {
        fontFamily: 'regular',
        fontSize: 20,
        color: COLORS.black,
        textAlign: 'center',
        paddingTop: 17,
        paddingBottom: 44,
    },
});

export default styles;
