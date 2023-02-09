import Modal from '@common/Modal';
import { COLORS } from '@constants/Colors';
import styles from '@styles/common/Loader';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader = () => {
    return (
        <Modal>
            <View style={styles.holder}>
                <ActivityIndicator color={COLORS.primary} size='large' />
            </View>
        </Modal>
    );
};

export default Loader;
