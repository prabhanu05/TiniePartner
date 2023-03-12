import styles from '@styles/common/FullButton';
import React from 'react';
import { Pressable, Text } from 'react-native';

const FullButton = (props: {
    variant: 'primary' | 'secondary' | 'tertiary';
    text: string;
    onPress: () => void;
}) => {
    const pressedButtonStyles =
        props.variant === 'primary'
            ? [styles.container, styles.primary, styles.active]
            : props.variant === 'secondary'
            ? [styles.container, styles.secondary, styles.active]
            : [styles.container, styles.tertiary, styles.active];
    const buttonStyles =
        props.variant === 'primary'
            ? [styles.container, styles.primary]
            : props.variant === 'secondary'
            ? [styles.container, styles.secondary]
            : [styles.container, styles.tertiary];

    return (
        <Pressable
            style={({ pressed }) =>
                pressed ? pressedButtonStyles : buttonStyles
            }
            onPress={props.onPress}
        >
            <Text
                style={
                    props.variant === 'tertiary'
                        ? [styles.txt, styles.tertiaryTxt]
                        : styles.txt
                }
            >
                {props.text}
            </Text>
        </Pressable>
    );
};

export default FullButton;
