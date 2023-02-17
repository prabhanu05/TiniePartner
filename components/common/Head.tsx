import BackBtn from '@common/BackBtn';
import styles from '@styles/common/Head';
import React from 'react';
import { View } from 'react-native';

const Head = (props: {
    enableBack?: boolean;
    centered?: boolean;
    children: React.ReactNode;
}) => {
    return (
        <View
            style={
                !!props.centered
                    ? [styles.container, styles.centered]
                    : styles.container
            }
        >
            {!!props.enableBack ? <BackBtn /> : null}
            {props.children}
        </View>
    );
};

export default Head;
