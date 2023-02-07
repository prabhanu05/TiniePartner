import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 2,
        borderRadius: 5,
        backgroundColor: COLORS.picker,
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
    },
    txt: {
        color: COLORS.white,
        fontFamily: 'regular',
        fontSize: 12,
        textAlign: 'center',
    },
    heading: {
        marginVertical: 1,
        marginHorizontal: 4,
        color: COLORS.black,
        fontSize: 8,
        fontFamily: 'regular',
    },
});

export default styles;
