import styles from '@styles/common/FullButton';
import React from 'react';
import { Pressable, Text } from 'react-native';

const FullButton = (props: {
    variant: 'primary' | 'secondary' | 'tertiary';
    text: string;
    onPress: () => void;
    noFlex?: boolean;
}) => {
    const pressedButtonStyles =
        props.variant === 'primary'
            ? [
                  props.noFlex
                      ? styles.noFlexContainer
                      : props.noFlex
                      ? styles.noFlexContainer
                      : styles.container,
                  styles.primary,
                  styles.active,
              ]
            : props.variant === 'secondary'
            ? [
                  props.noFlex ? styles.noFlexContainer : styles.container,
                  styles.secondary,
                  styles.active,
              ]
            : [
                  props.noFlex ? styles.noFlexContainer : styles.container,
                  styles.tertiary,
                  styles.active,
              ];
    const buttonStyles =
        props.variant === 'primary'
            ? [
                  props.noFlex ? styles.noFlexContainer : styles.container,
                  styles.primary,
              ]
            : props.variant === 'secondary'
            ? [
                  props.noFlex ? styles.noFlexContainer : styles.container,
                  styles.secondary,
              ]
            : [
                  props.noFlex ? styles.noFlexContainer : styles.container,
                  styles.tertiary,
              ];

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
