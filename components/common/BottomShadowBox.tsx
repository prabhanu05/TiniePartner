import styles from '@styles/common/BottomShadowBox';
import { StyleProp, View, ViewStyle } from 'react-native';

const BottomShadowBox = (props: {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}) => (
    <View style={[styles.container, props.style]}>
        <View style={styles.shadow}>{props.children}</View>
    </View>
);

export default BottomShadowBox;
