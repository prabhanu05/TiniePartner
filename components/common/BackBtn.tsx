import { NavigationProp } from '@models/screens';
import { useNavigation } from '@react-navigation/native';
import styles from '@styles/common/BackBtn';
import BackIcon from '@svg/BackIcon';
import React from 'react';
import { Pressable } from 'react-native';

const BackBtn = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <Pressable onPress={navigation.goBack} style={styles.container}>
            <BackIcon />
        </Pressable>
    );
};

export default BackBtn;
