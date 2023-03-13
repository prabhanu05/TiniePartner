import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        backgroundColor: COLORS.opaqueBlack,
        marginTop: 'auto',
        paddingTop: 0,
    },
    label: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: 'medium',
    },
    topBar: {
        height: 73,
        backgroundColor: COLORS.drawerHeader,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    topBarText: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: 'regular',
    },
    mainContainer: {
        backgroundColor: COLORS.transparent,
        marginBottom: 53,
    },
});

export default styles;
