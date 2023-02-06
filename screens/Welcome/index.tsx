import { IMAGES } from '@constants/Images';
import styles from '@styles/pages/Welcome';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.smallContainer}>
                <Image source={IMAGES.logo} />
            </View>
            <View style={styles.bigContainer}>
                <Text>WELCOME!</Text>
            </View>
        </SafeAreaView>
    );
};

export default Welcome;
