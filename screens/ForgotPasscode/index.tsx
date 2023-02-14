import { SendOTP } from '@api/SendOTP';
import Button from '@common/Button';
import ErrorModal from '@common/ErrorModal';
import Header from '@common/Header';
import LabelTextbox from '@common/LabelTextbox';
import { isNumeric } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import useTimer from '@hooks/useTimer';
import { AxiosErrorMessage } from '@models/data/AxiosErrorMessage';
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

        await sendOtp(data.phone)
            .then((response) => {
                if (response === true) {
                    mobileResendStart();
                    visibleHandler('isPhoneOtpVisible');
                }
            })
            .catch((error: AxiosErrorMessage) => {
                setError({
                    isVisible: true,
                    message: !!error?.response?.data?.status
                        ? error?.response?.data?.status
                        : 'Unable to send OTP on this number. Is this a WhatsApp registered number?',
                });
            });
    };

    const emailOtpHandler = async () => {
        if (!!data.email.trim() === false || !data.email.includes('@')) {
            setError({
                isVisible: true,
                message: 'Please enter a valid email ID',
            });
            return;
        }

        await sendOtp(data.email)
            .then((response) => {
                if (response === true) {
                    emailResendStart();
                    visibleHandler('isEmailOtpVisible');
                }
            })
            .catch((error: AxiosErrorMessage) => {
                setError({
                    isVisible: true,
                    message: !!error?.response?.data?.status
                        ? error?.response?.data?.status
                        : 'Unable to send on this email! Please try again later.',
                });
            });
    };

    const continueHandler = () => {
        navigation.navigate(SCREENS.RESET_PASSCODE, {
            email: data.email,
            phoneOtp: data.phoneOtp,
            emailOtp: data.emailOtp,
        });
    };

    return (
        <>
            {error.isVisible ? (
                <ErrorModal msg={error.message} onClose={closeModalHandler} />
            ) : null}
            <SafeAreaView style={styles.container}>
                <Header text='Forgot passcode' />
                <ScrollView contentContainerStyle={styles.subcontainer}>
                    <LabelTextbox
                        value={data.phone}
                        onChangeText={changeHandler.bind(this, 'phone')}
                        placeholder='Mobile Number*'
                        numeric
                        maxLength={10}
                        label='Mobile Number'
                    />
                    {visible.isPhoneOtpVisible ? (
                        <>
                            <LabelTextbox
                                value={data.phoneOtp}
                                onChangeText={changeHandler.bind(
                                    this,
                                    'phoneOtp'
                                )}
                                placeholder='OTP sent to Phone number*'
                                numeric
                                maxLength={6}
                                label='OTP'
                            />

                            {mobileTimeLeft === 0 ? (
                                <Text
                                    style={styles.txt}
                                    onPress={mobileOtpHandler}
                                >
                                    <Text style={styles.borderText}>
                                        Resend OTP
                                    </Text>
                                    <Text>, If not received</Text>
                                </Text>
                            ) : (
                                <Text style={styles.txt}>
                                    Please wait {mobileTimeLeft} second(s)
                                </Text>
                            )}
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
                    <LabelTextbox
                        value={data.email}
                        onChangeText={changeHandler.bind(this, 'email')}
                        placeholder='Enter Email ID*'
                        label='Email ID'
                    />
                    {visible.isEmailOtpVisible ? (
                        <LabelTextbox
                            value={data.emailOtp}
                            onChangeText={changeHandler.bind(this, 'emailOtp')}
                            placeholder='Enter OTP Sent to Your Email*'
                            numeric
                            maxLength={6}
                            label='OTP'
                        />
                    ) : null}
                    <View style={styles.row}>
                        <Text style={styles.txt} onPress={cancelHandler}>
                            CANCEL
                        </Text>
                        {visible.isEmailOtpVisible ? (
                            emailTimeLeft === 0 ? (
                                <Text
                                    style={styles.txt}
                                    onPress={emailOtpHandler}
                                >
                                    <Text style={styles.borderText}>
                                        Resend OTP
                                    </Text>
                                    <Text>, If not received</Text>
                                </Text>
                            ) : (
                                <Text style={styles.txt}>
                                    Please wait {emailTimeLeft} second(s)
                                </Text>
                            )
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
        </>
    );
};

export default ForgotPasscode;
