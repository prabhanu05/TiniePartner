import BottomShadowBox from '@common/BottomShadowBox';
import styles from '@styles/common/Header';
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props: { text: string; enableBack?: boolean }) => {
    return (
        <BottomShadowBox>
            <View style={styles.container}>
                <Text style={styles.txt}>{props.text}</Text>
            </View>
        </BottomShadowBox>
    );
};

export default Header;
