import GlowButton from '@common/GlowButton';
import styles from '@styles/pages/AddService';
import React from 'react';
import { Text, View } from 'react-native';

const ConfirmModal = (props: { onConfirm: () => void; message: string }) => {
    return (
        <View>
            <Text style={styles.serviceCreatedTxt}>{props.message}</Text>
            <View>
                <GlowButton text='OK' onPress={props.onConfirm} />
            </View>
        </View>
    );
};

export default ConfirmModal;
