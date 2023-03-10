import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: '100%',
        borderWidth: 1,
        borderRadius: 9,
        borderColor: COLORS.grey,
        position: 'relative',
        marginVertical: 8,
    },
    placeholder: {
        color: COLORS.placeholder,
        fontFamily: 'regular',
        fontSize: 12,
    },
    example: {
        color: COLORS.example,
        fontFamily: 'regular',
        fontSize: 12,
    },
    label: {
        color: COLORS.textboxLabel,
        fontFamily: 'bold',
        fontSize: 10,
        position: 'absolute',
        zIndex: 1,
        left: 6,
        top: -10,
        backgroundColor: COLORS.white,
        paddingHorizontal: 2,
    },
    value: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 12,
    },
    overlay: {
        backgroundColor: COLORS.white,
        borderRadius: 8,
        width: '90%',
        maxHeight: '90%',
        overflow: 'hidden',
    },
});

export default styles;
