import Button from '@common/Button';
import ErrorModal from '@common/ErrorModal';
import Header from '@common/Header';
import TextBox from '@common/TextBox';
import ResetModal from '@components/ResetPasscode/ResetModal';
import { isNumeric } from '@constants/Helpers';
import {
    ResetData,
    ResetModalData,
} from '@models/data/ResetPasscode/ResetData';
import { SCREENS } from '@models/screens';
import { SetPasscodeScreenProps } from '@models/screens/StackScreens';
import { registerActions } from '@store/actions';
import styles from '@styles/pages/ResetPasscode';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

const SetPasscode = ({ navigation }: SetPasscodeScreenProps) => {
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

    const [data, setData] = useState<ResetData>({
        passcode: '',
        resetPasscode: '',
    });

    const dispatch = useDispatch();

    const changeHandler = (uid: keyof ResetData, text: string) => {
        setData((oldState) => ({
            ...oldState,
            [uid]: text,
        }));
    };
    const saveHandler = () => {
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

        dispatch(registerActions.setPasscode(data.passcode));

        setModal((oldState) => ({
            ...oldState,
            successModal: {
                isVisible: true,
                message: 'passcode set successfully!',
            },
        }));
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

        navigation.navigate(SCREENS.PRIVACY_POLICY);
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
                <Header text='Passcode' />
                <ScrollView contentContainerStyle={styles.subcontainer}>
                    <Text style={styles.txt}>
                        Set your 4 digit passcode{' '}
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

                    <Text style={styles.cancel} onPress={navigation.goBack}>
                        CANCEL
                    </Text>
                    <View style={styles.btn}>
                        <Button text='Save' onPress={saveHandler} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default SetPasscode;
