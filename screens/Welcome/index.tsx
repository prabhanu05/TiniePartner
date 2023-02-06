import Button from '@common/Button';
import { IMAGES } from '@constants/Images';
import styles from '@styles/pages/Welcome';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
    const registerHandler = () => {};

    const loginHandler = () => {};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Image source={IMAGES.logo} />
                <View style={styles.innerContainer}>
                    <Text style={styles.txt}>WELCOME!</Text>
                    <Button
                        text='Register business'
                        onPress={registerHandler}
                    />
                    <Button text='login' onPress={loginHandler} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Welcome;
