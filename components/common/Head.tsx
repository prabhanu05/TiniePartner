import BackBtn from '@common/BackBtn';
import { SCREENS } from '@models/screens';
import styles from '@styles/common/Head';
import React from 'react';
import { View } from 'react-native';

const Head = (props: {
    enableBack?: boolean;
    centered?: boolean;
    children: React.ReactNode;
    customBack?: { screen: SCREENS };
}) => {
    return (
        <View
            style={
                !!props.centered
                    ? [styles.container, styles.centered]
                    : styles.container
            }
        >
            {!!props.enableBack ? (
                <BackBtn
                    customBack={
                        !!props.customBack ? props.customBack : undefined
                    }
                />
            ) : null}
            {props.children}
        </View>
    );
};

export default Head;
