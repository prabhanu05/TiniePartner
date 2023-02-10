import styles from '@styles/common/Option';
import React from 'react';
import { Pressable, Text } from 'react-native';

const Option = (props: {
    value: string;
    name: string;
    onPress: () => void;
}) => {
    return (
        <Pressable
            style={({ pressed }) =>
                pressed ? styles.translucent : styles.opaque
            }
            onPress={props.onPress}
        >
            <Text style={styles.text}>{props.name}</Text>
        </Pressable>
    );
};

export default Option;
