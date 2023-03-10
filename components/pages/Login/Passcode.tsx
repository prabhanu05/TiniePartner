import { LoginMerchant } from '@api/LoginMerchant';
import GlowButton from '@common/GlowButton';
import Modal from '@common/Modal';
import PasscodeInput from '@components/Login/PasscodeInput';
import {
    DEMO_OTP,
    DEMO_PASSCODE,
    DEMO_PHONE_NUMBER,
} from '@constants/DemoDetails';
import { isNumeric } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import { AxiosErrorMessage } from '@models/data/AxiosErrorMessage';
import { LoginModel } from '@models/data/Login/LoginScreen';
import { NavigationProp, SCREENS } from '@models/screens';
import { CredentialsSliceModel } from '@models/store/CredentialsSliceModel';
import { useNavigation } from '@react-navigation/native';
import { credentialsActions } from '@store/actions';
import styles from '@styles/pages/Login';
import * as SecureStore from 'expo-secure-store';
import React, { useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

const Passcode = (props: {
    toggleHandler: () => void;
    phoneData: LoginModel;
    errorModalOpenHandler: (msg: string) => void;
}) => {
    const [data, setData] = useState(['', '', '', '']);
    const dispatch = useDispatch();

    const { isLoading, mutateAsync } = useMutation(
        Keys.LOGIN_MERCHANT,
        LoginMerchant
    );

    const { navigate } = useNavigation<NavigationProp>();

    const firstTextInputRef = useRef<TextInput>(null);
    const secondTextInputRef = useRef<TextInput>(null);
    const thirdTextInputRef = useRef<TextInput>(null);
    const fourthTextInputRef = useRef<TextInput>(null);

    const refArray = [
        firstTextInputRef,
        secondTextInputRef,
        thirdTextInputRef,
        fourthTextInputRef,
    ];

    const changeHandler = (index: number, text: string) => {
        if (text !== '' && isNumeric(text) === false) return;

        const clonedData = [...data];
        clonedData[index] = text;
        setData(clonedData);

        if (text === '') {
            if (index === 3) {
                thirdTextInputRef.current?.focus();
            } else if (index === 2) {
                secondTextInputRef.current?.focus();
            } else if (index === 1) {
                firstTextInputRef.current?.focus();
            }
        } else {
            if (index === 0) {
                secondTextInputRef.current?.focus();
            } else if (index === 1) {
                thirdTextInputRef.current?.focus();
            } else if (index === 2) {
                fourthTextInputRef.current?.focus();
            }
        }
    };

    const navigateHandler = () => {
        props.toggleHandler();
        navigate(SCREENS.FORGOT_PASSCODE);
    };

    const loginHandler = async () => {
        if (props.phoneData.mobile === DEMO_PHONE_NUMBER) {
            if (props.phoneData.otp !== DEMO_OTP) {
                props.errorModalOpenHandler(
                    'Invalid OTP entered. Please enter correct OTP.'
                );
                return;
            }
            if (`${data[0]}${data[1]}${data[2]}${data[3]}` !== DEMO_PASSCODE) {
                props.errorModalOpenHandler(
                    'Invalid Passcode entered. Please enter correct Passcode.'
                );
                return;
            }
        }

        await mutateAsync({
            phone: props.phoneData.mobile,
            phoneOtp: props.phoneData.otp,
            passcode: `${data[0]}${data[1]}${data[2]}${data[3]}`,
        })
            .then(async (response) => {
                const details = {
                    phonenumber: response.phonenumber,
                    token: response.token,
                    merchantId: response.id,
                } as CredentialsSliceModel;

                await SecureStore.setItemAsync(
                    'details',
                    JSON.stringify(details)
                );

                dispatch(
                    credentialsActions.setCredentials({
                        token: response.token,
                        phonenumber: response.phonenumber,
                        merchantId: response.id,
                        businessId: response.businessId,
                        businessName: response.businessName,
                        rating: response.rating,
                    })
                );
                props.toggleHandler();
            })
            .catch((error: AxiosErrorMessage) => {
                if (error.response) {
                    props.errorModalOpenHandler(error?.response?.data?.status);
                    return;
                }
                props.errorModalOpenHandler(
                    'Unable to login right now. Please try again later.'
                );
            });
    };

    return (
        <Modal>
            <View style={styles.passcodeHolder}>
                <Text style={styles.passHeading}>ENTER PASSCODE</Text>
                <View style={styles.passcodeRow}>
                    {data.map((val, index) => (
                        <PasscodeInput
                            key={`passcode_${index}`}
                            value={val}
                            onChangeText={changeHandler.bind(this, index)}
                            reference={refArray[index]}
                        />
                    ))}
                </View>
                <Text style={styles.forgotPass} onPress={navigateHandler}>
                    Forgot passcode - <Text style={styles.reset}>reset</Text>
                </Text>
                <View style={styles.row}>
                    <Pressable style={styles.col} onPress={props.toggleHandler}>
                        <Text style={styles.cancel}>Cancel</Text>
                    </Pressable>
                    <View style={styles.col}>
                        <GlowButton
                            text='Enter'
                            isLoading={isLoading}
                            onPress={loginHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default Passcode;
