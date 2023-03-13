import GlowButton from '@common/GlowButton';
import styles from '@styles/pages/AddService';
import React from 'react';
import { Text, View } from 'react-native';

const ConfirmModal = (props: {
    onConfirm: () => void;
    message: string;
    helperText?: string;
}) => {
    return (
        <View>
            <Text
                style={
                    !!props?.helperText
                        ? styles.serviceCreatedTxt
                        : [styles.serviceCreatedTxt, styles.pb50]
                }
            >
                {props.message}
            </Text>
            {!!props?.helperText ? (
                <Text style={styles.helperTxt}>{props?.helperText}</Text>
            ) : null}
            <View>
                <GlowButton text='OK' onPress={props.onConfirm} />
            </View>
        </View>
    );
};

export default ConfirmModal;
