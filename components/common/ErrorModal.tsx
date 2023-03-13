import FullButton from '@common/FullButton';
import Modal from '@common/Modal';
import styles from '@styles/common/ErrorModal';
import Error from '@svg/Error';
import React from 'react';
import { Text, View } from 'react-native';

const ErrorModal = (props: { msg: string; onClose: () => void }) => {
    return (
        <Modal>
            <View style={styles.container}>
                <Error />
                <Text style={styles.txt}>{props.msg}</Text>
                <FullButton
                    variant='primary'
                    text='retry'
                    onPress={props.onClose}
                    noFlex
                />
            </View>
        </Modal>
    );
};

export default ErrorModal;
