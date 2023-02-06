import Button from '@common/Button';
import Header from '@common/Header';
import TextBox from '@common/TextBox';
import { ForgotData } from '@models/data/ForgotPasscode/ForgotData';
import { ForgotPasscodeScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/ForgotPasscode';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPasscode = ({ navigation }: ForgotPasscodeScreenProps) => {
    const [data, setData] = useState<ForgotData>({
        email: '',
        emailOtp: '',
        phone: '',
        phoneOtp: '',
    });

    const changeHandler = (uid: keyof ForgotData, text: string) => {
        setData((oldState) => ({
            ...oldState,
            [uid]: text,
        }));
    };

    const cancelHandler = () => {
        navigation.goBack();
    };

    const continueHandler = () => {};

    return (
        <SafeAreaView style={styles.container}>
            <Header text='Forgot passcode' />
            <ScrollView style={styles.subcontainer}>
                <TextBox
                    value={data.phone}
                    onChangeText={changeHandler.bind(this, 'phone')}
                    placeholder='Mobile Number*'
                    numeric
                />
                <TextBox
                    value={data.phone}
                    onChangeText={changeHandler.bind(this, 'phoneOtp')}
                    placeholder='OTP sent to Phone number*'
                    numeric
                    maxLength={6}
                />
                <Text style={styles.txt}>
                    <Text style={styles.borderText}>Resend OTP</Text>
                    <Text>, If not received</Text>
                </Text>
                <TextBox
                    value={data.email}
                    onChangeText={changeHandler.bind(this, 'email')}
                    placeholder='Enter Email ID*'
                />
                <TextBox
                    value={data.emailOtp}
                    onChangeText={changeHandler.bind(this, 'emailOtp')}
                    placeholder='Enter OTP Sent to Your Email*'
                    numeric
                    maxLength={6}
                />
                <View style={styles.row}>
                    <Text style={styles.txt} onPress={cancelHandler}>
                        CANCEL
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={styles.borderText}>Resend OTP</Text>
                        <Text>, If not received</Text>
                    </Text>
                </View>
                <View style={styles.btn}>
                    <Button text='continue' onPress={continueHandler} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPasscode;
