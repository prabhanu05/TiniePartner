import GlowButton from '@common/GlowButton';
import styles from '@styles/pages/AddService';
import React from 'react';
import { Text, View } from 'react-native';

const NoDataFound = (props: { message: string; onClose: () => void }) => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>{props.message}</Text>
            <View style={styles.emptyBtn}>
                <GlowButton text='Okay' onPress={props.onClose} />
            </View>
        </View>
    );
};

export default NoDataFound;
