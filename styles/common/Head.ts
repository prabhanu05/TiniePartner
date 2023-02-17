import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    centered: {
        justifyContent: 'center',
    },
});

export default styles;
