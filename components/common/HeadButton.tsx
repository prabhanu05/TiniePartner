import { COLORS } from '@constants/Colors';
import styles from '@styles/common/HeadButton';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, Text } from 'react-native';

const HeadButton = (props: {
    text: string;
    isActive: boolean;
    onPress: () => void;
}) => {
    return (
        <>
            {props.isActive ? (
                <LinearGradient
                    colors={[COLORS.primaryGradient, COLORS.secondaryGradient]}
                    style={styles.container}
                >
                    <Pressable onPress={props.onPress}>
                        <Text style={styles.txt}>{props.text}</Text>
                    </Pressable>
                </LinearGradient>
            ) : (
                <Pressable
                    style={[styles.container, styles.inactiveBtn]}
                    onPress={props.onPress}
                >
                    <Text style={styles.txt}>{props.text}</Text>
                </Pressable>
            )}
        </>
    );
};

export default HeadButton;
