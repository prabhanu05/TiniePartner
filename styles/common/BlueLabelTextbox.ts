import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginVertical: 8,
        flex: 1,
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
    textInput: {
        paddingVertical: 8.5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderRadius: 9,
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 12,
        width: '100%',
    },
    highlightText: {
        color: COLORS.textboxLabel,
    },
    textArea: {
        paddingVertical: 8.5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderRadius: 9,
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 12,
        width: '100%',
        height: 54,
    },
});

export default styles;
