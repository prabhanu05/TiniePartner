import Button from '@common/Button';
import Checkbox from '@common/Checkbox';
import ErrorModal from '@common/ErrorModal';
import Header from '@common/Header';
import { ModalData } from '@models/data/ModalData';
import { SCREENS } from '@models/screens';
import { TnCScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/PrivacyPolicy';
import React, { useState } from 'react';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TermsAndConditions = ({ navigation }: TnCScreenProps) => {
    const [terms, setTerms] = useState(false);

    const [modal, setModal] = useState<ModalData>({
        isVisible: false,
        message: '',
    });

    const linkHandler = (link: string) => {
        Linking.openURL(link);
    };

    const navigateHandler = () => {
        if (!terms) {
            setModal({
                isVisible: true,
                message:
                    'In order to register account with tinie, you must agree to our terms and conditions.',
            });
            return;
        }
        navigation.navigate(SCREENS.HOST_BUSINESS);
    };

    const toggleHandler = () => {
        setTerms((oldState) => !oldState);
    };

    const closeModalHandler = () => {
        setModal({
            isVisible: false,
            message: '',
        });
    };

    return (
        <>
            {modal.isVisible ? (
                <ErrorModal msg={modal.message} onClose={closeModalHandler} />
            ) : null}
            <SafeAreaView style={styles.container}>
                <Header text='Terms and Conditions' />
                <ScrollView contentContainerStyle={styles.list}>
                    <View style={styles.para}>
                        <Text style={styles.heading}>Terms & Conditions</Text>
                        <Text style={styles.body}>
                            By downloading or using the app, these terms will
                            automatically apply to you – you should make sure
                            therefore that you read them carefully before using
                            the app. You’re not allowed to copy or modify the
                            app, any part of the app, or our trademarks in any
                            way. You’re not allowed to attempt to extract the
                            source code of the app, and you also shouldn’t try
                            to translate the app into other languages or make
                            derivative versions. The app itself, and all the
                            trademarks, copyright, database rights, and other
                            intellectual property rights related to it, still
                            belong to tinie business private limited.
                            {'\n'}
                            tinie business private limited is committed to
                            ensuring that the app is as useful and efficient as
                            possible. For that reason, we reserve the right to
                            make changes to the app or to charge for its
                            services, at any time and for any reason. We will
                            never charge you for the app or its services without
                            making it very clear to you exactly what you’re
                            paying for.{'\n'}
                            The tinie app stores and processes personal data
                            that you have provided to us, to provide our
                            Service. It’s your responsibility to keep your phone
                            and access to the app secure. We therefore recommend
                            that you do not jailbreak or root your phone, which
                            is the process of removing software restrictions and
                            limitations imposed by the official operating system
                            of your device. It could make your phone vulnerable
                            to malware/viruses/malicious programs, compromise
                            your phone’s security features and it could mean
                            that the tinie app won’t work properly or at all.
                            The app does use third-party services that declare
                            their Terms and Conditions. Link to Terms and
                            Conditions of third-party service providers used by
                            the app
                            {'\n\t\u25CF '}
                            <Text
                                onPress={linkHandler.bind(
                                    this,
                                    'https://policies.google.com/privacy'
                                )}
                                style={styles.link}
                            >
                                Google Play Services
                            </Text>
                            {'\n\t\u25CF '}
                            <Text
                                onPress={linkHandler.bind(
                                    this,
                                    'https://support.google.com/admob/answer/6128543'
                                )}
                                style={styles.link}
                            >
                                AdMob
                            </Text>
                            {'\n\t\u25CF '}
                            <Text
                                onPress={linkHandler.bind(
                                    this,
                                    'https://firebase.google.com/policies/analytics'
                                )}
                                style={styles.link}
                            >
                                Google Analytics for Firebase
                            </Text>
                            {'\n\t\u25CF '}
                            <Text
                                onPress={linkHandler.bind(
                                    this,
                                    'https://firebase.google.com/support/privacy/'
                                )}
                                style={styles.link}
                            >
                                Firebase Crashlytics
                            </Text>
                            {'\n\t\u25CF '}
                            <Text
                                onPress={linkHandler.bind(
                                    this,
                                    'https://www.facebook.com/about/privacy/update/printable'
                                )}
                                style={styles.link}
                            >
                                Facebook
                            </Text>
                            {'\n\n'}
                            You should be aware that there are certain things
                            that tinie business private limited will not take
                            responsibility for. Certain functions of the app
                            will require the app to have an active internet
                            connection. The connection can be Wi-Fi or provided
                            by your mobile network provider, but tinie business
                            private limited cannot take responsibility for the
                            app not working at full functionality if you don’t
                            have access to Wi-Fi, and you don’t have any of your
                            data allowance left.
                            {'\n'}If you’re using the app outside of an area
                            with Wi-Fi, you should remember that the terms of
                            the agreement with your mobile network provider will
                            still apply. As a result, you may be charged by your
                            mobile provider for the cost of data for the
                            duration of the connection while accessing the app,
                            or other third-party charges. In using the app,
                            you’re accepting responsibility for any such
                            charges, including roaming data charges if you use
                            the app outside of your home territory (i.e. region
                            or country) without turning off data roaming. If you
                            are not the bill payer for the device on which
                            you’re using the app, please be aware that we assume
                            that you have received permission from the bill
                            payer for using the app.{'\n\n'}Along the same
                            lines, tinie business private limited cannot always
                            take responsibility for the way you use the app i.e.
                            You need to make sure that your device stays charged
                            – if it runs out of battery and you can’t turn it on
                            to avail the Service, tinie business private limited
                            cannot accept responsibility.{'\n'}With respect to
                            tinie business private limited’s responsibility for
                            your use of the app, when you’re using the app, it’s
                            important to bear in mind that although we endeavor
                            to ensure that it is updated and correct at all
                            times, we do rely on third parties to provide
                            information to us so that we can make it available
                            to you. tinie business private limited accepts no
                            liability for any loss, direct or indirect, you
                            experience as a result of relying wholly on this
                            functionality of the app.{'\n'}At some point, we may
                            wish to update the app. The app is currently
                            available on Android – the requirements for the
                            system(and for any additional systems we decide to
                            extend the availability of the app to) may change,
                            and you’ll need to download the updates if you want
                            to keep using the app. tinie business private
                            limited does not promise that it will always update
                            the app so that it is relevant to you and/or works
                            with the Android version that you have installed on
                            your device. However, you promise to always accept
                            updates to the application when offered to you, We
                            may also wish to stop providing the app, and may
                            terminate use of it at any time without giving
                            notice of termination to you. Unless we tell you
                            otherwise, upon any termination, (a) the rights and
                            licenses granted to you in these terms will end; (b)
                            you must stop using the app, and (if needed) delete
                            it from your device.
                        </Text>
                    </View>

                    <View style={styles.para}>
                        <Text style={styles.heading}>
                            Changes to This Terms and Conditions
                        </Text>
                        <Text style={styles.body}>
                            We may update our Terms and Conditions from time to
                            time. Thus, you are advised to review this page
                            periodically for any changes. We will notify you of
                            any changes by posting the new Terms and Conditions
                            on this page.{'\n'}
                            These terms and conditions are effective as of
                            2022-07-25
                        </Text>
                    </View>

                    <View style={styles.para}>
                        <Text style={styles.heading}>Contact Us</Text>
                        <Text style={styles.body}>
                            If you have any questions or suggestions about our
                            Terms and Conditions, do not hesitate to contact us
                            at info@tinie.in.
                        </Text>
                    </View>

                    <Pressable
                        style={styles.checkboxRow}
                        onPress={toggleHandler}
                    >
                        <Checkbox isSelected={terms} />
                        <Text style={styles.term}>
                            I Agree to the terms and Conditions*
                        </Text>
                    </Pressable>

                    <View style={styles.btn}>
                        <Button
                            text='Save and Continue'
                            onPress={navigateHandler}
                            rounded
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default TermsAndConditions;
