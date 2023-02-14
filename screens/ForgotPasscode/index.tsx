import { SendOTP } from '@api/SendOTP';
import Button from '@common/Button';
import Header from '@common/Header';
import TextBox from '@common/TextBox';
import { isNumeric } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import useTimer from '@hooks/useTimer';
import { ForgotData } from '@models/data/ForgotPasscode/ForgotData';
import { HostBusinessModel } from '@models/data/HostBusinessModel';
import { ModalData } from '@models/data/ModalData';
import { SCREENS } from '@models/screens';
import { ForgotPasscodeScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/ForgotPasscode';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation } from 'react-query';

const ForgotPasscode = ({ navigation }: ForgotPasscodeScreenProps) => {
    const { mutateAsync: sendOtp, isLoading: sendOtpLoading } = useMutation(
        Keys.SEND_OTP,
        SendOTP
    );

    const [data, setData] = useState<ForgotData>({
        email: '',
        emailOtp: '',
        phone: '',
        phoneOtp: '',
    });

    const [error, setError] = useState<ModalData>({
        isVisible: false,
        message: '',
    });

    const { timeLeft: mobileTimeLeft, handleStart: mobileResendStart } =
        useTimer(20);
    const { timeLeft: emailTimeLeft, handleStart: emailResendStart } =
        useTimer(20);

    const [visible, setVisible] = useState<HostBusinessModel>({
        isEmailOtpVisible: false,
        isPhoneOtpVisible: false,
    });

    const closeModalHandler = () => {
        setError({
            isVisible: false,
            message: '',
        });
    };

    const visibleHandler = (uid: keyof HostBusinessModel) => {
        setVisible((oldState) => ({
            ...oldState,
            [uid]: true,
        }));
    };

    const changeHandler = (uid: keyof ForgotData, text: string) => {
        setData((oldState) => ({
            ...oldState,
            [uid]: text,
        }));
    };

    const cancelHandler = () => {
        navigation.goBack();
    };

    const mobileOtpHandler = async () => {
        if (data.phone.length !== 10 || isNumeric(data.phone) === false) {
            setError({
                isVisible: true,
                message: 'Please enter a valid mobile number',
            });
            return;
        }

        const response = await sendOtp(data.phone);

        if (response !== true) {
            setError({
                isVisible: true,
                message:
                    'Unable to send OTP on mobile this time. Please try again later!',
            });
            return;
        }
        mobileResendStart();
        visibleHandler('isPhoneOtpVisible');
    };

    const emailOtpHandler = async () => {
        if (!!data.email.trim() === false || !data.email.includes('@')) {
            setError({
                isVisible: true,
                message: 'Please enter a valid email ID',
            });
            return;
        }

        const response = await sendOtp(data.email);
        if (response !== true) {
            setError({
                isVisible: true,
                message:
                    'Unable to send OTP on email this time. Please try again later!',
            });
            return;
        }
        emailResendStart();
        visibleHandler('isEmailOtpVisible');
    };

    const continueHandler = () => {
        navigation.navigate(SCREENS.RESET_PASSCODE, {
            email: data.email,
            phoneOtp: data.phoneOtp,
            emailOtp: data.emailOtp,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header text='Forgot passcode' />
            <ScrollView contentContainerStyle={styles.subcontainer}>
                <TextBox
                    value={data.phone}
                    onChangeText={changeHandler.bind(this, 'phone')}
                    placeholder='Mobile Number*'
                    numeric
                />
                {visible.isPhoneOtpVisible ? (
                    <>
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
                    </>
                ) : (
                    <View style={styles.btn}>
                        <Button
                            text='Send OTP'
                            onPress={mobileOtpHandler}
                            isLoading={sendOtpLoading}
                        />
                    </View>
                )}
                <TextBox
                    value={data.email}
                    onChangeText={changeHandler.bind(this, 'email')}
                    placeholder='Enter Email ID*'
                />
                {visible.isEmailOtpVisible ? (
                    <TextBox
                        value={data.emailOtp}
                        onChangeText={changeHandler.bind(this, 'emailOtp')}
                        placeholder='Enter OTP Sent to Your Email*'
                        numeric
                        maxLength={6}
                    />
                ) : null}
                <View style={styles.row}>
                    <Text style={styles.txt} onPress={cancelHandler}>
                        CANCEL
                    </Text>
                    {visible.isEmailOtpVisible ? (
                        <Text style={styles.txt}>
                            <Text style={styles.borderText}>Resend OTP</Text>
                            <Text>, If not received</Text>
                        </Text>
                    ) : null}
                </View>
                {!visible.isEmailOtpVisible ? (
                    <View style={styles.btn}>
                        <Button
                            text='Send OTP'
                            onPress={emailOtpHandler}
                            isLoading={sendOtpLoading}
                        />
                    </View>
                ) : null}
                {visible.isEmailOtpVisible && visible.isPhoneOtpVisible ? (
                    <View style={[styles.btn, styles.mt40]}>
                        <Button text='continue' onPress={continueHandler} />
                    </View>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPasscode;
