import Modal from '@common/Modal';
import styles from '@styles/common/Popup';
import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

const Popup = (props: { children: React.ReactNode }) => {
    return (
        <Modal>
            <KeyboardAvoidingView
                behavior='position'
                style={styles.keyboardView}
            >
                <View style={styles.container}>{props.children}</View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default Popup;
