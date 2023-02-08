import Button from '@common/Button';
import Header from '@common/Header';
import LabelTextbox from '@common/LabelTextbox';
import SuccessModal from '@components/HostBusiness/SuccessModal';
import { SCREENS } from '@models/screens';
import { HostBusinessScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/HostBusiness';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HostBusiness = ({ navigation }: HostBusinessScreenProps) => {
    const [modal, setModal] = useState(false);

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
                        value=''
                    />
                    <LabelTextbox
                        label='Mobile Number'
                        placeholder='Mobile Number*'
                        value=''
                        maxLength={10}
                        numeric
                    />
                    <LabelTextbox
                        label='OTP'
                        placeholder='OTP sent to Phone number'
                        value=''
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
                        value=''
                    />
                    <LabelTextbox
                        label='OTP'
                        placeholder='Enter OTP Sent to Your Email*'
                        value=''
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
