import { RegisterMerchant } from '@api/RegisterMerchant';
import { SendOTP } from '@api/SendOTP';
import Button from '@common/Button';
import ErrorModal from '@common/ErrorModal';
import Header from '@common/Header';
import LabelTextbox from '@common/LabelTextbox';
import SuccessModal from '@components/HostBusiness/SuccessModal';
import { isNumeric } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import useTimer from '@hooks/useTimer';
import { AxiosErrorMessage } from '@models/data/AxiosErrorMessage';
import { HostBusinessModel } from '@models/data/HostBusinessModel';
import { SuccessErrorModel } from '@models/data/ModalData';
import { SCREENS } from '@models/screens';
import { HostBusinessScreenProps } from '@models/screens/StackScreens';
import { RegisterSliceStringModel } from '@models/store/RegisterSliceModel';
import { registerActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/HostBusiness';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

const HostBusiness = ({ navigation }: HostBusinessScreenProps) => {
    const { mutateAsync: sendOtp, isLoading: sendOtpLoading } = useMutation(
        Keys.SEND_OTP,
        SendOTP
    );

    const {
        mutateAsync: registerMerchantApi,
        isLoading: registerMerchantLoading,
    } = useMutation(Keys.REGISTER_MERCHANT, RegisterMerchant);

    const { timeLeft: mobileTimeLeft, handleStart: mobileResendStart } =
        useTimer(20);
    const { timeLeft: emailTimeLeft, handleStart: emailResendStart } =
        useTimer(20);

    const [modal, setModal] = useState<SuccessErrorModel>({
        error: {
            isVisible: false,
            message: '',
        },
        success: {
            isVisible: false,
            message: '',
        },
    });

    const [visible, setVisible] = useState<HostBusinessModel>({
        isEmailOtpVisible: false,
        isPhoneOtpVisible: false,
    });

    const visibleHandler = (uid: keyof HostBusinessModel) => {
        setVisible((oldState) => ({
            ...oldState,
            [uid]: true,
        }));
    };

    const registerData = useSelector(
        (state: StoreModel) => state.registerReducer
    );

    const dispatch = useDispatch();

    const textHandler = (uid: keyof RegisterSliceStringModel, text: string) => {
        dispatch(registerActions.textHandler({ uid, text }));
    };

    const closeErrorModal = () => {
        setModal((oldState) => ({
            ...oldState,
            error: {
                isVisible: false,
                message: '',
            },
        }));
    };

    const mobileOtpHandler = async () => {
        if (
            registerData.businessPhoneNumber.length !== 10 ||
            isNumeric(registerData.businessPhoneNumber) === false
        ) {
            setModal((oldState) => ({
                ...oldState,
                error: {
                    isVisible: true,
                    message: 'Please enter a valid mobile number',
                },
            }));
            return;
        }

        await sendOtp(registerData.businessPhoneNumber)
            .then((response) => {
                if (response === true) {
                    mobileResendStart();
                    visibleHandler('isPhoneOtpVisible');
                }
            })
            .catch((error: AxiosErrorMessage) => {
                setModal((oldState) => ({
                    ...oldState,
                    error: {
                        isVisible: true,
                        message: !!error?.response?.data?.status
                            ? error?.response?.data?.status
                            : 'Unable to send OTP on this number. Is this a WhatsApp registered number?',
                    },
                }));
            });
    };

    const emailOtpHandler = async () => {
        if (
            !!registerData.email.trim() === false ||
            !registerData.email.includes('@')
        ) {
            setModal((oldState) => ({
                ...oldState,
                error: {
                    isVisible: true,
                    message: 'Please enter a valid email ID',
                },
            }));
            return;
        }

        await sendOtp(registerData.email)
            .then((response) => {
                if (response === true) {
                    emailResendStart();
                    visibleHandler('isEmailOtpVisible');
                }
            })
            .catch((error: AxiosErrorMessage) => {
                setModal((oldState) => ({
                    ...oldState,
                    error: {
                        isVisible: true,
                        message: !!error?.response?.data?.status
                            ? error?.response?.data?.status
                            : 'Unable to send OTP on email this time. Please try again later!',
                    },
                }));
            });
    };

    const completeHandler = async () => {
        if (
            registerData.emailOtp.length !== 6 ||
            isNumeric(registerData.emailOtp) === false
        ) {
            setModal((oldState) => ({
                ...oldState,
                error: {
                    isVisible: true,
                    message: 'Invalid Email OTP!',
                },
            }));
            return;
        }
        if (
            registerData.phoneOtp.length !== 6 ||
            isNumeric(registerData.phoneOtp) === false
        ) {
            setModal((oldState) => ({
                ...oldState,
                error: {
                    isVisible: true,
                    message: 'Invalid Mobile OTP!',
                },
            }));
            return;
        }

        const formData = new FormData();
        let flag = false;

        if (registerData.bms) {
            formData.append(
                'additionalServices',
                'Booking Management Services'
            );
            flag = true;
        }

        if (registerData.offAndOn) {
            formData.append(
                'additionalServices',
                'Offline and Online Billing Integration'
            );
            flag = true;
        }

        if (registerData.sms) {
            formData.append('additionalServices', 'Staff Management Services');
            flag = true;
        }

        if (registerData.ims) {
            formData.append(
                'additionalServices',
                'Inventory Management Services'
            );
            flag = true;
        }

        if (registerData.sfc) {
            formData.append('additionalServices', 'Sales Focused Campaigns');
            flag = true;
        }

        if (registerData.bri) {
            formData.append(
                'additionalServices',
                'Business reports and Insights'
            );
            flag = true;
        }

        if (registerData.pos) {
            formData.append(
                'additionalServices',
                'Point of Sales (POS) System'
            );
            flag = true;
        }

        if (registerData.tax) {
            formData.append('additionalServices', 'Tax Services');
            flag = true;
        }

        if (!!registerData.anyOtherAssistance.trim()) {
            formData.append(
                'additionalServices',
                registerData.anyOtherAssistance
            );
            flag = true;
        }

        if (!flag) {
            formData.append('additionalServices', '');
        }

        formData.append(
            'address',
            `${registerData.addressLine1}, ${registerData.addressLine2}, ${registerData.addressLine1}, ${registerData.city}, ${registerData.state}, ${registerData.pin}`
        );

        formData.append('businessName', registerData.businessName);
        formData.append(
            'businessPhoneNumber',
            registerData.businessPhoneNumber
        );
        formData.append('email', registerData.email);
        formData.append('emailOtp', registerData.emailOtp);
        formData.append('latitude', registerData.latitude!.toString());
        formData.append('longitude', registerData.longitude!.toString());
        formData.append('name', registerData.name);
        formData.append('pan', registerData.pan);
        formData.append('passcode', registerData.passcode);
        formData.append('phoneNumber', registerData.phoneNumber);
        formData.append('phoneOtp', registerData.phoneOtp);
        formData.append('subCategoryId', registerData.subCategory.id);
        formData.append('yearEstablished', registerData.yearEstablished);
        formData.append('files', registerData.merchantId as any);
        formData.append('files', registerData.gstinId as any);

        await registerMerchantApi(formData)
            .then((response) => {
                if (!!response && response === 'Registration Successful') {
                    setModal({
                        error: {
                            isVisible: false,
                            message: '',
                        },
                        success: {
                            isVisible: true,
                            message: '',
                        },
                    });
                    return;
                }
            })
            .catch((error: AxiosErrorMessage) => {
                setModal((oldState) => ({
                    ...oldState,
                    error: {
                        isVisible: true,
                        message: !!error?.response?.data?.status
                            ? error?.response?.data?.status?.toString()
                            : 'Unable to create account right now',
                    },
                }));
            });
    };

    const confirmHandler = () => {
        setModal({
            error: {
                isVisible: false,
                message: '',
            },
            success: {
                isVisible: false,
                message: '',
            },
        });
        navigation.navigate(SCREENS.WELCOME);
    };

    return (
        <>
            {modal.success.isVisible ? (
                <SuccessModal onPress={confirmHandler} />
            ) : null}
            {modal.error.isVisible ? (
                <ErrorModal
                    msg={modal.error.message}
                    onClose={closeErrorModal}
                />
            ) : null}
            <SafeAreaView style={styles.container}>
                <Header text='Host your business' />
                <ScrollView contentContainerStyle={styles.list}>
                    <LabelTextbox
                        label='Name'
                        placeholder='Enter Name*'
                        value={registerData.businessName}
                        onChangeText={textHandler.bind(this, 'businessName')}
                    />
                    <LabelTextbox
                        label='Mobile Number'
                        placeholder='Mobile Number*'
                        value={registerData.businessPhoneNumber}
                        onChangeText={textHandler.bind(
                            this,
                            'businessPhoneNumber'
                        )}
                        maxLength={10}
                        numeric
                    />
                    {visible.isPhoneOtpVisible ? (
                        <>
                            <LabelTextbox
                                label='OTP'
                                placeholder='OTP sent to Phone number'
                                value={registerData.phoneOtp}
                                onChangeText={textHandler.bind(
                                    this,
                                    'phoneOtp'
                                )}
                                maxLength={6}
                                numeric
                            />

                            {mobileTimeLeft === 0 ? (
                                <Pressable
                                    style={styles.mv10}
                                    onPress={mobileOtpHandler}
                                >
                                    <Text
                                        style={[
                                            styles.txt,
                                            styles.rightAligned,
                                        ]}
                                    >
                                        <Text style={styles.borderText}>
                                            Resend OTP
                                        </Text>
                                        <Text>, If not received</Text>
                                    </Text>
                                </Pressable>
                            ) : (
                                <Text
                                    style={[
                                        styles.txt,
                                        styles.mv10,
                                        styles.rightAligned,
                                    ]}
                                >
                                    Please wait {mobileTimeLeft} second(s)
                                </Text>
                            )}
                        </>
                    ) : (
                        <View style={styles.button}>
                            <Button
                                text='Send OTP'
                                onPress={mobileOtpHandler}
                                isLoading={sendOtpLoading}
                            />
                        </View>
                    )}

                    <LabelTextbox
                        label='Email ID'
                        placeholder='Enter Email ID*'
                        value={registerData.email}
                        onChangeText={textHandler.bind(this, 'email')}
                    />
                    {visible.isEmailOtpVisible ? (
                        <LabelTextbox
                            label='OTP'
                            placeholder='Enter OTP Sent to Your Email*'
                            value={registerData.emailOtp}
                            onChangeText={textHandler.bind(this, 'emailOtp')}
                            numeric
                            maxLength={6}
                        />
                    ) : null}

                    <View style={styles.row}>
                        <Text style={styles.txt} onPress={navigation.goBack}>
                            CANCEL
                        </Text>

                        {visible.isEmailOtpVisible ? (
                            emailTimeLeft === 0 ? (
                                <Pressable onPress={emailOtpHandler}>
                                    <Text style={styles.txt}>
                                        <Text style={styles.borderText}>
                                            Resend OTP
                                        </Text>
                                        <Text>, If not received</Text>
                                    </Text>
                                </Pressable>
                            ) : (
                                <Text style={styles.txt}>
                                    Please wait {emailTimeLeft} second(s)
                                </Text>
                            )
                        ) : null}
                    </View>

                    {!visible.isEmailOtpVisible ? (
                        <View style={styles.button}>
                            <Button
                                text='Send OTP'
                                onPress={emailOtpHandler}
                                isLoading={sendOtpLoading}
                            />
                        </View>
                    ) : null}

                    {visible.isEmailOtpVisible && visible.isPhoneOtpVisible ? (
                        <View style={[styles.button, styles.pv20]}>
                            <Button
                                text='Complete Registration'
                                onPress={completeHandler}
                                isLoading={registerMerchantLoading}
                            />
                        </View>
                    ) : null}
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default HostBusiness;
