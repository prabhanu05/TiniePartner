import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        paddingBottom: 5,
        maxHeight: 55,
    },
    shadow: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: '100%',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5,
    },
});

export default styles;
