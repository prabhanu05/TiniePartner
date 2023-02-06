import styles from '@styles/common/Modal';
import React from 'react';
import { Modal as RNModal, Pressable } from 'react-native';

const Modal = (props: {
    children: React.ReactNode;
    onBackdropPress?: () => void;
}) => {
    return (
        <RNModal visible transparent statusBarTranslucent animationType='fade'>
            <Pressable
                style={styles.containerModal}
                onPress={!!props.onBackdropPress ? props.onBackdropPress : null}
            >
                {props.children}
            </Pressable>
        </RNModal>
    );
};

export default Modal;
