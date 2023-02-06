import { COLORS } from '@constants/Colors';
import styles from '@styles/common/Button';
import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';

const Button = (props: {
    text: string;
    onPress: () => void;
    isLoading?: boolean;
}) => {
    return (
        <Pressable
            style={({ pressed }) =>
                pressed ? [styles.container, styles.active] : styles.container
            }
            onPress={!!props.isLoading ? null : props.onPress}
        >
            {!!props.isLoading ? (
                <ActivityIndicator color={COLORS.white} />
            ) : (
                <Text style={styles.txt}>{props.text}</Text>
            )}
        </Pressable>
    );
};

export default Button;
