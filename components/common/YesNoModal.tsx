import FullButton from '@common/FullButton';
import Modal from '@common/Modal';
import styles from '@styles/common/YesNoModal';
import React from 'react';
import { Text, View } from 'react-native';

const YesNoModal = (props: {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}) => {
    return (
        <Modal>
            <View style={styles.container}>
                <Text style={styles.text}>{props.message}</Text>
                <View style={styles.btnRow}>
                    <FullButton
                        variant='tertiary'
                        text='Cancel'
                        onPress={props.onCancel}
                    />
                    <FullButton
                        variant='primary'
                        text='Yes'
                        onPress={props.onConfirm}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default YesNoModal;
