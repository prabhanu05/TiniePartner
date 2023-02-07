import Button from '@common/Button';
import Header from '@common/Header';
import TextBox from '@common/TextBox';
import ResetModal from '@components/ResetPasscode/ResetModal';
import { ResetData } from '@models/data/ResetPasscode/ResetData';
import { SCREENS } from '@models/screens';
import { SetPasscodeScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/ResetPasscode';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SetPasscode = ({ navigation }: SetPasscodeScreenProps) => {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState<ResetData>({
        passcode: '',
        resetPasscode: '',
    });

    const toggleHandler = () => {
        setModal((oldState) => !oldState);
    };

    const doneHandler = () => {
        toggleHandler();
        navigation.navigate(SCREENS.PRIVACY_POLICY);
    };

    const changeHandler = (uid: keyof ResetData, text: string) => {
        setData((oldState) => ({
            ...oldState,
            [uid]: text,
        }));
    };

    const saveHandler = () => {
        toggleHandler();
    };

    return (
        <>
            {modal ? (
                <ResetModal
                    msg='passcode set successfully!'
                    onSave={doneHandler}
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
