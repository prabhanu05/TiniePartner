import Button from '@common/Button';
import Header from '@common/Header';
import LabelTextbox from '@common/LabelTextbox';
import SuccessModal from '@components/HostBusiness/SuccessModal';
import { SCREENS } from '@models/screens';
import { HostBusinessScreenProps } from '@models/screens/StackScreens';
import { RegisterSliceStringModel } from '@models/store/RegisterSliceModel';
import { registerActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/HostBusiness';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

const HostBusiness = ({ navigation }: HostBusinessScreenProps) => {
    const [modal, setModal] = useState(false);

    const registerData = useSelector(
        (state: StoreModel) => state.registerReducer
    );

    const dispatch = useDispatch();

    const textHandler = (uid: keyof RegisterSliceStringModel, text: string) => {
        dispatch(registerActions.textHandler({ uid, text }));
    };

    const toggleHandler = () => {
        setModal((oldState) => !oldState);
    };

    const completeHandler = () => {
        toggleHandler();
    };

    const confirmHandler = () => {
        toggleHandler();
        navigation.navigate(SCREENS.WELCOME);
    };

    return (
        <>
            {modal ? <SuccessModal onPress={confirmHandler} /> : null}
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
                    <LabelTextbox
                        label='OTP'
                        placeholder='OTP sent to Phone number'
                        value={registerData.phoneOtp}
                        onChangeText={textHandler.bind(this, 'phoneOtp')}
                        maxLength={6}
                        numeric
                    />

                    <Pressable style={styles.mv10}>
                        <Text style={[styles.txt, styles.rightAligned]}>
                            <Text style={styles.borderText}>Resend OTP</Text>
                            <Text>, If not received</Text>
                        </Text>
                    </Pressable>

                    <LabelTextbox
                        label='Email ID'
                        placeholder='Enter Email ID*'
                        value={registerData.email}
                        onChangeText={textHandler.bind(this, 'email')}
                    />
                    <LabelTextbox
                        label='OTP'
                        placeholder='Enter OTP Sent to Your Email*'
                        value={registerData.emailOtp}
                        onChangeText={textHandler.bind(this, 'emailOtp')}
                    />

                    <View style={styles.row}>
                        <Text style={styles.txt} onPress={navigation.goBack}>
                            CANCEL
                        </Text>

                        <Pressable>
                            <Text style={styles.txt}>
                                <Text style={styles.borderText}>
                                    Resend OTP
                                </Text>
                                <Text>, If not received</Text>
                            </Text>
                        </Pressable>
                    </View>

                    <View style={styles.button}>
                        <Button
                            text='Complete Registration'
                            onPress={completeHandler}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default HostBusiness;
