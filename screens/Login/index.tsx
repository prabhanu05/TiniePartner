import { SendOTP } from '@api/SendOTP';
import Button from '@common/Button';
import ErrorModal from '@common/ErrorModal';
import Header from '@common/Header';
import TextBox from '@common/TextBox';
import Passcode from '@components/Login/Passcode';
import { DEMO_PHONE_NUMBER } from '@constants/DemoDetails';
import { isNumeric } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import useTimer from '@hooks/useTimer';
import { AxiosErrorMessage } from '@models/data/AxiosErrorMessage';
import { LoginModalData, LoginModel } from '@models/data/Login/LoginScreen';
import { LoginScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/Login';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation } from 'react-query';

const Login = ({ navigation }: LoginScreenProps) => {
    const [data, setData] = useState<LoginModel>({
        mobile: '',
        otp: '',
    });

    const { mutateAsync: sendOtp, isLoading: sendOtpLoading } = useMutation(
        Keys.SEND_OTP,
        SendOTP
    );

    const { timeLeft, handleStart } = useTimer(20);

    const [otpSent, setOtpSent] = useState(false);

    const [modal, showModal] = useState<LoginModalData>({
        errorModal: {
            isVisible: false,
            message: '',
        },
        passcodeModal: {
            isVisible: false,
            message: '',
        },
    });

    const changeHandler = (uid: keyof LoginModel, text: string) => {
        setData((oldState) => ({
            ...oldState,
            [uid]: text,
        }));
    };

    const toggleHandler = () => {
        showModal((oldState) => ({
            ...oldState,
            passcodeModal: {
                ...oldState.passcodeModal,
                isVisible: !oldState.passcodeModal.isVisible,
            },
        }));
    };

    const loginHandler = () => {
        showModal((oldData) => ({
            ...oldData,
            passcodeModal: {
                isVisible: true,
                message: '',
            },
        }));
    };

    const cancelHandler = () => {
        navigation.goBack();
    };

    const errorCloseHandler = () => {
        showModal((oldState) => ({
            ...oldState,
            errorModal: {
                isVisible: false,
                message: '',
            },
        }));
    };

    const errorModalOpenHandler = (msg: string) => {
        showModal({
            passcodeModal: {
                isVisible: false,
                message: '',
            },
            errorModal: {
                isVisible: true,
                message: msg,
            },
        });
    };

    const otpHandler = async () => {
        if (
            data.mobile !== DEMO_PHONE_NUMBER &&
            (data.mobile.length !== 10 || !isNumeric(data.mobile))
        ) {
            showModal((oldState) => ({
                ...oldState,
                errorModal: {
                    isVisible: true,
                    message: 'Invalid Mobile number',
                },
            }));
            return;
        }

        handleStart();

        if (data.mobile === DEMO_PHONE_NUMBER) {
            setOtpSent(true);
            return;
        }

        await sendOtp(data.mobile)
            .then((response) => {
                if (response === true) {
                    setOtpSent(true);
                }
            })
            .catch((error: AxiosErrorMessage) => {
                errorModalOpenHandler(
                    !!error?.response?.data?.status
                        ? error?.response?.data?.status
                        : 'Unable to send OTP on this number. Is this a WhatsApp registered number?'
                );
            });
    };

    return (
        <>
            {modal.passcodeModal.isVisible ? (
                <Passcode
                    phoneData={data}
                    toggleHandler={toggleHandler}
                    errorModalOpenHandler={errorModalOpenHandler}
                />
            ) : null}
            {modal.errorModal.isVisible ? (
                <ErrorModal
                    msg={modal.errorModal.message}
                    onClose={errorCloseHandler}
                />
            ) : null}
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Header text='Welcome, User' />
                    <View style={styles.subContainer}>
                        <TextBox
                            value={data.mobile}
                            placeholder='WhatsApp Mobile Number*'
                            onChangeText={changeHandler.bind(this, 'mobile')}
                            maxLength={data.mobile.startsWith('1') ? 11 : 10}
                            numeric
                            notEditable={otpSent}
                        />
                        {otpSent ? (
                            <>
                                <TextBox
                                    value={data.otp}
                                    placeholder='OTP sent to Phone number'
                                    onChangeText={changeHandler.bind(
                                        this,
                                        'otp'
                                    )}
                                    maxLength={6}
                                    numeric
                                />
                                <View style={styles.row}>
                                    <Text
                                        onPress={cancelHandler}
                                        style={styles.txt}
                                    >
                                        CANCEL
                                    </Text>
                                    {timeLeft === 0 ? (
                                        <Pressable onPress={otpHandler}>
                                            <Text style={styles.txt}>
                                                <Text style={styles.borderText}>
                                                    Resend OTP
                                                </Text>
                                                <Text>, If not received</Text>
                                            </Text>
                                        </Pressable>
                                    ) : (
                                        <Text style={styles.txt}>
                                            Please wait {timeLeft} second(s)
                                        </Text>
                                    )}
                                </View>
                                <Button text='Login' onPress={loginHandler} />
                            </>
                        ) : (
                            <Button
                                isLoading={sendOtpLoading}
                                text='Send OTP'
                                onPress={otpHandler}
                            />
                        )}
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

export default Login;
