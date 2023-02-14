import { PasscodeReset } from '@api/PasscodeReset';
import Button from '@common/Button';
import ErrorModal from '@common/ErrorModal';
import Header from '@common/Header';
import TextBox from '@common/TextBox';
import ResetModal from '@components/ResetPasscode/ResetModal';
import { isNumeric } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import { AxiosErrorMessage } from '@models/data/AxiosErrorMessage';
import {
    ResetData,
    ResetModalData,
} from '@models/data/ResetPasscode/ResetData';
import { SCREENS } from '@models/screens';
import { ResetPasscodeScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/ResetPasscode';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation } from 'react-query';

const ResetPasscode = ({ navigation, route }: ResetPasscodeScreenProps) => {
    const routeData = route.params;

    const { mutateAsync, isLoading } = useMutation(
        Keys.RESET_PASSCODE,
        PasscodeReset
    );

    const [data, setData] = useState<ResetData>({
        passcode: '',
        resetPasscode: '',
    });

    const [modal, setModal] = useState<ResetModalData>({
        errorModal: {
            isVisible: false,
            message: '',
        },
        successModal: {
            isVisible: false,
            message: '',
        },
    });

    const changeHandler = (uid: keyof ResetData, text: string) => {
        setData((oldState) => ({
            ...oldState,
            [uid]: text,
        }));
    };

    const cancelHandler = () => {
        navigation.goBack();
    };

    const saveHandler = async () => {
        if (data.passcode !== data.resetPasscode) {
            setModal((oldState) => ({
                ...oldState,
                errorModal: {
                    isVisible: true,
                    message:
                        'Passcode and Confirm Passcode should match each other',
                },
            }));
            return;
        }

        if (data.passcode.length !== 4) {
            setModal((oldState) => ({
                ...oldState,
                errorModal: {
                    isVisible: true,
                    message: 'Passcode must be of 4 digits',
                },
            }));
            return;
        }

        if (isNumeric(data.passcode) === false) {
            setModal((oldState) => ({
                ...oldState,
                errorModal: {
                    isVisible: true,
                    message: 'Passcode must be numeric',
                },
            }));
            return;
        }

        await mutateAsync({
            email: routeData.email,
            emailOtp: routeData.emailOtp,
            phoneOtp: routeData.phoneOtp,
            newPasscode: data.passcode,
        })
            .then((response) => {
                if (response === true) {
                    setModal((oldState) => ({
                        ...oldState,
                        successModal: {
                            isVisible: true,
                            message: 'passcode reset successfully!',
                        },
                    }));
                }
            })
            .catch((error: AxiosErrorMessage) => {
                setModal((oldState) => ({
                    ...oldState,
                    errorModal: {
                        isVisible: true,
                        message: !!error?.response?.data?.status
                            ? error?.response?.data?.status
                            : 'Unable to reset passcode! Please try again later.',
                    },
                }));
            });
    };

    const closeErrorHandler = () => {
        setModal((oldState) => ({
            ...oldState,
            errorModal: {
                isVisible: false,
                message: '',
            },
        }));
    };

    const doneHandler = () => {
        setModal((oldState) => ({
            ...oldState,
            successModal: {
                isVisible: false,
                message: '',
            },
        }));

        navigation.navigate(SCREENS.LOGIN);
    };

    return (
        <>
            {modal.successModal.isVisible ? (
                <ResetModal
                    msg={modal.successModal.message}
                    onSave={doneHandler}
                />
            ) : null}
            {modal.errorModal.isVisible ? (
                <ErrorModal
                    onClose={closeErrorHandler}
                    msg={modal.errorModal.message}
                />
            ) : null}
            <SafeAreaView style={styles.container}>
                <Header text='Reset passcode' />
                <ScrollView contentContainerStyle={styles.subcontainer}>
                    <Text style={styles.txt}>
                        Set your new 4 digit passcode{' '}
                        <Text style={styles.subTxt}>
                            (you will use this to login)
                        </Text>
                    </Text>

                    <View style={styles.miniContainer}>
                        <TextBox
                            value={data.passcode}
                            onChangeText={changeHandler.bind(this, 'passcode')}
                            placeholder='CHOOSE PASSCODE'
                            maxLength={4}
                            numeric
                        />
                        <TextBox
                            value={data.resetPasscode}
                            onChangeText={changeHandler.bind(
                                this,
                                'resetPasscode'
                            )}
                            placeholder='CONFIRM PASSCODE'
                            maxLength={4}
                            numeric
                        />
                    </View>

                    <Text style={styles.cancel} onPress={cancelHandler}>
                        CANCEL
                    </Text>
                    <View style={styles.btn}>
                        <Button
                            text='Save'
                            isLoading={isLoading}
                            onPress={saveHandler}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default ResetPasscode;
