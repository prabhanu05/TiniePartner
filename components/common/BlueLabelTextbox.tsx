import { COLORS } from '@constants/Colors';
import styles from '@styles/common/BlueLabelTextbox';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const BlueLabelTextbox = (props: {
    placeholder: string;
    value: string;
    label: string;
    onChange: (text: string) => void;
    maxLength?: number;
    isTextArea?: boolean;
    highlightText?: boolean;
    isNumeric?: boolean;
}) => {
    return (
        <View style={styles.container}>
            {props?.value?.length > 0 ? (
                <Text style={styles.label}>{props.label}</Text>
            ) : null}
            <TextInput
                onChangeText={props.onChange}
                placeholder={props.placeholder}
                placeholderTextColor={
                    !!props?.highlightText
                        ? COLORS.textboxLabel
                        : COLORS.placeholder
                }
                value={props.value}
                style={
                    !!props?.isTextArea
                        ? styles.textArea
                        : !!props?.highlightText
                        ? [styles.textInput, styles.highlightText]
                        : styles.textInput
                }
                maxLength={!!props?.maxLength ? props?.maxLength : undefined}
                numberOfLines={!!props?.isTextArea ? 3 : undefined}
                multiline={!!props.isTextArea}
                keyboardType={!!props?.isNumeric ? 'decimal-pad' : undefined}
            />
        </View>
    );
};

export default BlueLabelTextbox;
