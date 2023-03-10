import Modal from '@common/Modal';
import styles from '@styles/common/Popup';
import React from 'react';
import { View } from 'react-native';

const Popup = (props: { children: React.ReactNode }) => {
    return (
        <Modal>
            <View style={styles.container}>{props.children}</View>
        </Modal>
    );
};

export default Popup;
