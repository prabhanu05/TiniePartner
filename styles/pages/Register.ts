import { COLORS } from '@constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    list: {
        paddingHorizontal: 16,
    },
    heading: {
        color: COLORS.black,
        fontSize: 17,
        fontFamily: 'bold',
        paddingVertical: 30,
    },
    subHeading: {
        color: COLORS.black,
        fontFamily: 'regular',
        fontSize: 16,
        paddingBottom: 7,
    },
    extraMargin: {
        marginTop: 24,
        marginBottom: 7,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 16,
    },
    col: {
        width: '45%',
    },
    mapHolder: {
        width: '100%',
        height: 192,
        marginTop: 8,
        marginBottom: 26,
    },
    map: {
        height: '100%',
        width: '100%',
        position: 'relative',
    },
    markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -24,
        position: 'absolute',
        top: '50%',
    },
    mt12: {
        marginTop: 12,
    },
});

export default styles;
