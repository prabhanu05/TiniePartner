import styles from '@styles/common/FilterButton';
import React from 'react';
import { Pressable, Text } from 'react-native';

const FilterButton = (props: {
    isActive: boolean;
    onPress: () => void;
    text: string;
}) => {
    return (
        <Pressable
            style={
                props.isActive
                    ? [styles.container, styles.activeContainer]
                    : styles.container
            }
            onPress={props.onPress}
        >
            <Text style={props.isActive ? styles.activeText : styles.text}>
                {props.text}
            </Text>
        </Pressable>
    );
};

export default FilterButton;
