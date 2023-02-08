import styles from '@styles/pages/Login';
import React from 'react';
import { TextInput } from 'react-native';

const PasscodeInput = (props: {
    value: string;
    onChangeText: (text: string) => void;
    reference: React.RefObject<TextInput>;
}) => {
    return (
        <TextInput
            style={styles.passcodeInput}
            maxLength={1}
            keyboardType='decimal-pad'
            value={props.value}
            onChangeText={props.onChangeText}
            ref={props.reference}
        />
    );
};

export default PasscodeInput;
