import styles from '@styles/common/PickerButton';
import React from 'react';
import { Pressable, Text } from 'react-native';

const PickerButton = (props: { onPress: () => void }) => {
    return (
        <>
            <Pressable style={styles.container} onPress={props.onPress}>
                <Text style={styles.txt}>Choose file</Text>
            </Pressable>
            <Text style={styles.heading}>
                Only PDF, JPEG & PNG Files with size Limit 5MB
            </Text>
        </>
    );
};

export default PickerButton;
