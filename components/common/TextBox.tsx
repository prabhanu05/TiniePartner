import { COLORS } from '@constants/Colors';
import styles from '@styles/common/TextBox';
import React from 'react';
import { TextInput } from 'react-native';

const TextBox = (props: {
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    maxLength?: number;
    numeric?: boolean;
}) => {
    return (
        <TextInput
            style={styles.container}
            placeholderTextColor={COLORS.placeholder}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            maxLength={!!props.maxLength ? props.maxLength : undefined}
            keyboardType={!!props.numeric ? 'number-pad' : 'default'}
        />
    );
};

export default TextBox;
