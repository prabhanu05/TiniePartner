import styles from '@styles/pages/AddService';
import React from 'react';
import { Pressable, Text } from 'react-native';

const CustomColorBtn = (props: {
    text: string;
    onPress: () => void;
    backgroundColor: string;
}) => {
    return (
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) =>
                pressed
                    ? [
                          styles.btn,
                          styles.translucent,
                          { backgroundColor: props.backgroundColor },
                      ]
                    : [styles.btn, { backgroundColor: props.backgroundColor }]
            }
        >
            <Text style={styles.btnTxt}>{props.text}</Text>
        </Pressable>
    );
};

export default CustomColorBtn;
