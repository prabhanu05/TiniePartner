import Header from '@common/Header';
import ProgressBar from '@common/ProgressBar';
import BasicInfo from '@components/Register/BasicInfo';
import BusinessAddress from '@components/Register/BusinessAddress';
import BusinessInfo from '@components/Register/BusinessInfo';
import { SCREENS } from '@models/screens';
import { RegisterScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/Register';
import Info from '@svg/Info';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = ({ navigation }: RegisterScreenProps) => {
    const [activeStep, setActiveStep] = useState(0);

    const backHandler = (index: number) => {
        if (index === 0) {
            setActiveStep(0);
            navigation.goBack();
            return;
        }
        if (index === 1) {
            setActiveStep(0);
            return;
        }
        if (index === 2) {
            setActiveStep(1);
            return;
        }
    };

    const nextHandler = (index: number) => {
        if (index === 0) {
            setActiveStep(1);
            return;
        }
        if (index === 1) {
            setActiveStep(2);
            return;
        }

        if (index === 2) {
            navigation.navigate(SCREENS.FURTHER_ASSISTANCE);
            return;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header text='Business Registration' icon={<Info />} enableBack />
            <ProgressBar activeIndex={activeStep} />
            <ScrollView contentContainerStyle={styles.list}>
                {activeStep === 0 ? (
                    <BasicInfo
                        backHandler={backHandler.bind(this, 0)}
                        nextHandler={nextHandler.bind(this, 0)}
                    />
                ) : null}
                {activeStep === 1 ? (
                    <BusinessInfo
                        backHandler={backHandler.bind(this, 1)}
                        nextHandler={nextHandler.bind(this, 1)}
                    />
                ) : null}
                {activeStep === 2 ? (
                    <BusinessAddress
                        backHandler={backHandler.bind(this, 2)}
                        nextHandler={nextHandler.bind(this, 2)}
                    />
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;
