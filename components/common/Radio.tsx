import styles from '@styles/common/Radio';
import React, { useRef } from 'react';
import { Animated, Pressable } from 'react-native';

const Radio = (props: { isActive: boolean; toggleHandler: () => void }) => {
    const leftValue = useRef(
        new Animated.Value(props.isActive ? 100 : 0)
    ).current;

    const translate = leftValue.interpolate({
        inputRange: [0, 100],
        outputRange: [4, 24],
    });

    const toggleHandler = () => {
        if (props.isActive) {
            Animated.timing(leftValue, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }).start(props.toggleHandler);

            return;
        }
        Animated.timing(leftValue, {
            toValue: 100,
            duration: 400,
            useNativeDriver: true,
        }).start(props.toggleHandler);
    };

    return (
        <Pressable
            onPress={toggleHandler}
            style={
                props.isActive
                    ? [styles.radioContainer, styles.activeBox]
                    : styles.radioContainer
            }
        >
            <Animated.View
                style={
                    props.isActive
                        ? [
                              styles.radioBtn,
                              styles.activeBtn,
                              { transform: [{ translateX: translate }] },
                          ]
                        : [
                              styles.radioBtn,
                              { transform: [{ translateX: translate }] },
                          ]
                }
            />
        </Pressable>
    );
};

export default Radio;
