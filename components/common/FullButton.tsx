import styles from '@styles/common/FullButton';
import React from 'react';
import { Pressable, Text } from 'react-native';

const FullButton = (props: {
    variant: 'primary' | 'secondary';
    text: string;
    onPress: () => void;
}) => {
    return (
        <Pressable
            style={({ pressed }) =>
                props.variant === 'primary'
                    ? pressed
                        ? [styles.container, styles.primary, styles.active]
                        : [styles.container, styles.primary]
                    : pressed
                    ? [styles.container, styles.secondary, styles.active]
                    : [styles.container, styles.secondary]
            }
            onPress={props.onPress}
        >
            <Text style={styles.txt}>{props.text}</Text>
        </Pressable>
    );
};

export default FullButton;
