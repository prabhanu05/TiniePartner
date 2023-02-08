import Button from '@common/Button';
import Header from '@common/Header';
import { SCREENS } from '@models/screens';
import { PrivacyPolicyScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/PrivacyPolicy';
import React from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PrivacyPolicy = ({ navigation }: PrivacyPolicyScreenProps) => {
    const linkHandler = (link: string) => {
        Linking.openURL(link);
    };

    const navigateHandler = () => {
        navigation.navigate(SCREENS.TnC);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header text='Privacy Policy' />
            <ScrollView contentContainerStyle={styles.list}>
                <View style={styles.para}>
                    <Text style={styles.heading}>Privacy Policy</Text>
                    <Text style={styles.body}>
                        tinie business private limited built the tinie app as a
                        Commercial app. This SERVICE is provided by tinie
                        business private limited and is intended for use as is.
                        This page is used to inform visitors regarding our
                        policies with the collection, use, and disclosure of
                        Personal Information if anyone decided to use our
                        Service.{'\n'}
                        If you choose to use our Service, then you agree to the
                        collection and use of information in relation to this
                        policy. The Personal Information that we collect is used
                        for providing and improving the Service. We will not use
                        or share your information with anyone except as
                        described in this Privacy Policy.{'\n'} The terms used
                        in this Privacy Policy have the same meanings as in our
                        Terms and Conditions, which are accessible at tinie
                        unless otherwise defined in this Privacy Policy.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>
                        Information Collection and Use
                    </Text>
                    <Text style={styles.body}>
                        For a better experience, while using our Service, we may
                        require you to provide us with certain personally
                        identifiable information, including but not limited to
                        phone, email, name, location. The information that we
                        request will be retained by us and used as described in
                        this privacy policy. The app does use third-party
                        services that may collect information used to identify
                        you. Link to the privacy policy of third-party service
                        providers used by the app {'\n\t\u25CF '}
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
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>Log Data</Text>
                    <Text style={styles.body}>
                        We want to inform you that whenever you use our Service,
                        in a case of an error in the app we collect data and
                        information (through third-party products) on your phone
                        called Log Data. This Log Data may include information
                        such as your device Internet Protocol (“IP”) address,
                        device name, operating system version, the configuration
                        of the app when utilizing our Service, the time and date
                        of your use of the Service, and other statistics.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>Cookies</Text>
                    <Text style={styles.body}>
                        Cookies are files with a small amount of data that are
                        commonly used as anonymous unique identifiers. These are
                        sent to your browser from the websites that you visit
                        and are stored on your device's internal memory.{'\n'}{' '}
                        This Service does not use these “cookies” explicitly.
                        However, the app may use third-party code and libraries
                        that use “cookies” to collect information and improve
                        their services. You have the option to either accept or
                        refuse these cookies and know when a cookie is being
                        sent to your device. If you choose to refuse our
                        cookies, you may not be able to use some portions of
                        this Service.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>Service Providers</Text>
                    <Text style={styles.body}>
                        We may employ third-party companies and individuals due
                        to the following reasons: {'\n\t\u25CF '}To facilitate
                        our Service; {'\n\t\u25CF '}To provide the Service on
                        our behalf; {'\n\t\u25CF '}To perform Service-related
                        services; {'\n\t\u25CF '}or To assist us in analyzing
                        how our Service is used. {'\n'}We want to inform users
                        of this Service that these third parties have access to
                        their Personal Information. The reason is to perform the
                        tasks assigned to them on our behalf. However, they are
                        obligated not to disclose or use the information for any
                        other purpose.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>Security</Text>
                    <Text style={styles.body}>
                        We value your trust in providing us your Personal
                        Information, thus we are striving to use commercially
                        acceptable means of protecting it. But remember that no
                        method of transmission over the internet, or method of
                        electronic storage is 100% secure and reliable, and we
                        cannot guarantee its absolute security.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>Links to Other Sites</Text>
                    <Text style={styles.body}>
                        This Service may contain links to other sites. If you
                        click on a third-party link, you will be directed to
                        that site. Note that these external sites are not
                        operated by us. Therefore, we strongly advise you to
                        review the Privacy Policy of these websites. We have no
                        control over and assume no responsibility for the
                        content, privacy policies, or practices of any
                        third-party sites or services.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>Children’s Privacy</Text>
                    <Text style={styles.body}>
                        These Services do not address anyone under the age of
                        13. We do not knowingly collect personally identifiable
                        information from children under 13 years of age. In the
                        case we discover that a child under 13 has provided us
                        with personal information, we immediately delete this
                        from our servers. If you are a parent or guardian and
                        you are aware that your child has provided us with
                        personal information, please contact us so that we will
                        be able to do the necessary actions.
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>
                        Changes to This Privacy Policy
                    </Text>
                    <Text style={styles.body}>
                        We may update our Privacy Policy from time to time.
                        Thus, you are advised to review this page periodically
                        for any changes. We will notify you of any changes by
                        posting the new Privacy Policy on this page. {'\n\n'}
                        This policy is effective as of 2022-07-25
                    </Text>
                </View>

                <View style={styles.para}>
                    <Text style={styles.heading}>Contact Us</Text>
                    <Text style={styles.body}>
                        If you have any questions or suggestions about our
                        Privacy Policy, do not hesitate to contact us at
                        info@tinie.in.
                    </Text>
                </View>

                <View style={[styles.btn, styles.pv30]}>
                    <Button
                        text='Save and Continue'
                        onPress={navigateHandler}
                        rounded
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PrivacyPolicy;
