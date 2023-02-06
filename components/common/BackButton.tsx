import { useNavigation } from '@react-navigation/native';
import Back from '@svg/Back';
import React from 'react';
import { Pressable } from 'react-native';

const BackButton = () => {
    const { goBack } = useNavigation();
    return (
        <Pressable onPress={goBack}>
            <Back />
        </Pressable>
    );
};

export default BackButton;
