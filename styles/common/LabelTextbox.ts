import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    holder: {
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderRadius: 9,
        marginVertical: 7,
        paddingVertical: 14,
        paddingHorizontal: 10,
        flex: 1,
    },
    txt: {
        color: COLORS.placeholder,
        position: 'absolute',
        top: -2,
        left: 8,
        zIndex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 2,
        fontSize: 12,
        fontFamily: 'regular',
    },
});

export default styles;
