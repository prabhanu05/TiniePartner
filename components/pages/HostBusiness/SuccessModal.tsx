import Button from '@common/Button';
import Modal from '@common/Modal';
import styles from '@styles/pages/HostBusiness';
import RegisterSuccess from '@svg/RegisterSuccess';
import React from 'react';
import { Text, View } from 'react-native';

const SuccessModal = (props: { onPress: () => void }) => {
    return (
        <Modal>
            <View style={styles.modalContainer}>
                <RegisterSuccess />
                <Text style={styles.modalTxt}>
                    Thank you for registering with TINIE, Our team would get
                    back to you within 24 hours
                </Text>
                <Button text='Okay' onPress={props.onPress} />
            </View>
        </Modal>
    );
};

export default SuccessModal;
