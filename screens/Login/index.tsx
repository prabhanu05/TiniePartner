import Button from '@common/Button';
import Header from '@common/Header';
import TextBox from '@common/TextBox';
import Passcode from '@components/Login/Passcode';
import { LoginModel } from '@models/data/Login/LoginScreen';
import styles from '@styles/pages/Login';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
    const [data, setData] = useState<LoginModel>({
        mobile: '',
        otp: '',
    });

    const [modal, showModal] = useState(false);

    const changeHandler = (uid: keyof LoginModel, text: string) => {
        setData((oldState) => ({
            ...oldState,
            [uid]: text,
        }));
    };

    const toggleHandler = () => {
        showModal((oldState) => !oldState);
    };

    const loginHandler = () => {
        showModal(true);
    };

    return (
        <>
            {modal ? <Passcode toggleHandler={toggleHandler} /> : null}
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Header text='Welcome, User' />
                    <View style={styles.subContainer}>
                        <TextBox
                            value={data.mobile}
                            placeholder='Mobile Number*'
                            onChangeText={changeHandler.bind(this, 'mobile')}
                        />
                        <TextBox
                            value={data.otp}
                            placeholder='OTP sent to Phone number'
                            onChangeText={changeHandler.bind(this, 'otp')}
                            maxLength={6}
                            numeric
                        />
                        <View style={styles.row}>
                            <Text style={styles.txt}>CANCEL</Text>
                            <Pressable>
                                <Text style={styles.txt}>
                                    <Text style={styles.borderText}>
                                        Resend OTP
                                    </Text>
                                    <Text>, If not received</Text>
                                </Text>
                            </Pressable>
                        </View>
                        <Button text='Login' onPress={loginHandler} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

export default Login;
