import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    radioContainer: {
        width: 41,
        paddingVertical: 4,
        paddingHorizontal: 7,
        borderRadius: 100,
        backgroundColor: COLORS.radioContainerGrey,
        position: 'relative',
        height: 20,
        justifyContent: 'center',
    },
    radioBtn: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: COLORS.lightHeadBtn,
        position: 'absolute',
    },
    activeBox: {
        backgroundColor: COLORS.primary,
    },
    activeBtn: {
        backgroundColor: COLORS.selected,
    },
});

export default styles;
