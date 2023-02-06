import BackButton from '@common/BackButton';
import BottomShadowBox from '@common/BottomShadowBox';
import styles from '@styles/common/Header';
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props: {
    text: string;
    enableBack?: boolean;
    icon?: React.ReactNode;
}) => {
    return (
        <BottomShadowBox>
            <View style={styles.container}>
                <View style={styles.row}>
                    {!!props.enableBack ? <BackButton /> : null}
                    <Text
                        style={
                            !!props.enableBack
                                ? [styles.txt, styles.extraMargin]
                                : styles.txt
                        }
                    >
                        {props.text}
                    </Text>
                </View>
                {!!props.icon ? props.icon : null}
            </View>
        </BottomShadowBox>
    );
};

export default Header;
