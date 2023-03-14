import { NavigationProp, SCREENS } from '@models/screens';
import { useNavigation } from '@react-navigation/native';
import styles from '@styles/common/BackBtn';
import BackIcon from '@svg/BackIcon';
import React from 'react';
import { Pressable } from 'react-native';

const BackBtn = (props: { customBack?: { screen: SCREENS } }) => {
    const navigation = useNavigation<NavigationProp>();

    const navigateHandler = () => {
        if (!!props?.customBack) {
            navigation.navigate(props?.customBack?.screen);
        } else {
            navigation.goBack();
        }
    };

    return (
        <Pressable onPress={navigateHandler} style={styles.container}>
            <BackIcon />
        </Pressable>
    );
};

export default BackBtn;
