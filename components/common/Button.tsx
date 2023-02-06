import styles from '@styles/common/Button';
import React from 'react';
import { Pressable, Text } from 'react-native';

const Button = (props: { text: string; onPress: () => void }) => {
    return (
        <Pressable
            style={({ pressed }) =>
                pressed ? [styles.container, styles.active] : styles.container
            }
            onPress={props.onPress}
        >
            <Text style={styles.txt}>{props.text}</Text>
        </Pressable>
    );
};

export default Button;
