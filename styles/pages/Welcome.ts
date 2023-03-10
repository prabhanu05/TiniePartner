import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    subContainer: {
        flex: 1,
        paddingVertical: 24,
        alignItems: 'center',
    },
    innerContainer: {
        paddingTop: '40%',
        alignItems: 'center',
    },
    txt: {
        fontFamily: 'regular',
        fontSize: 18,
        color: COLORS.black,
    },
});

export default styles;
