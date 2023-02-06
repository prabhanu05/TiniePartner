import Header from '@common/Header';
import styles from '@styles/pages/Register';
import Info from '@svg/Info';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header text='Business Registration' icon={<Info />} enableBack />
            <ScrollView contentContainerStyle={styles.list}></ScrollView>
        </SafeAreaView>
    );
};

export default Register;
