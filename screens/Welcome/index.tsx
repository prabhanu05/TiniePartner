import Button from '@common/Button';
import { IMAGES } from '@constants/Images';
import { SCREENS } from '@models/screens';
import { WelcomeScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/Welcome';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = ({ navigation }: WelcomeScreenProps) => {
    const registerHandler = () => {
        navigation.navigate(SCREENS.REGISTER);
    };

    const loginHandler = () => {
        navigation.navigate(SCREENS.LOGIN);
    };

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
