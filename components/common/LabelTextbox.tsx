import { COLORS } from '@constants/Colors';
import styles from '@styles/common/LabelTextbox';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const LabelTextbox = (props: {
    placeholder: string;
    label: string;
    value: string;
    maxLength?: number;
    numeric?: boolean;
    onChangeText: (text: string) => void;
    notEditable?: boolean;
}) => {
    return (
        <View style={styles.holder}>
            {props.value.length > 0 ? (
                <Text style={styles.txt}>{props.label}</Text>
            ) : null}
            <TextInput
                style={styles.container}
                placeholderTextColor={COLORS.placeholder}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={
                    !!props.notEditable ? undefined : props.onChangeText
                }
                maxLength={!!props.maxLength ? props.maxLength : undefined}
                keyboardType={!!props.numeric ? 'number-pad' : 'default'}
                editable={!!props.notEditable ? false : true}
            />
        </View>
    );
};

export default LabelTextbox;
