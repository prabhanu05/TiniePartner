import Checkbox from '@common/Checkbox';
import FullButton from '@common/FullButton';
import Header from '@common/Header';
import { SCREENS } from '@models/screens';
import { FurtherAssistanceScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/pages/FurtherAssistance';
import Info from '@svg/Info';
import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FurtherAssistance = ({ navigation }: FurtherAssistanceScreenProps) => {
    const submitHandler = () => {
        navigation.navigate(SCREENS.SET_PASSCODE);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header text='Further Assistance' icon={<Info />} enableBack />
            <ScrollView
                style={styles.subContainer}
                contentContainerStyle={styles.list}
            >
                <Text style={styles.heading}>
                    Do you wish to have any of the following services
                    integrated?
                </Text>
                <Text style={styles.subheading}>
                    (You can make multiple Selection)
                </Text>
                <View style={styles.row}>
                    <Text style={styles.txt}>Booking Management Services</Text>
                    <Checkbox isSelected={false} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.txt}>
                        Offline and Online Billing Integration
                    </Text>
                    <Checkbox isSelected={true} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.txt}>Staff Management Services</Text>
                    <Checkbox isSelected={false} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.txt}>
                        Inventory Management Services
                    </Text>
                    <Checkbox isSelected={false} />
                </View>
                <View style={styles.row}>
                    <View style={styles.holder}>
                        <Text style={styles.txt}>Sales Focused Campaigns</Text>
                        <Text style={styles.subtxt}>
                            (Solely focuses on sales - Might be required to
                            offer discounts)
                        </Text>
                    </View>
                    <Checkbox isSelected={false} />
                </View>

                <View style={styles.row}>
                    <Text style={styles.txt}>
                        Business reports and Insights
                    </Text>
                    <Checkbox isSelected={false} />
                </View>

                <View style={styles.row}>
                    <Text style={styles.txt}>Point of Sales (POS) System</Text>
                    <Checkbox isSelected={false} />
                </View>

                <View style={styles.row}>
                    <Text style={styles.txt}>Tax services</Text>
                    <Checkbox isSelected={false} />
                </View>
                <View style={styles.col}>
                    <Text style={styles.txt}>
                        If any other, Please Specify:
                    </Text>
                    <TextInput style={styles.textArea} numberOfLines={4} />
                </View>
                <View style={styles.btnRow}>
                    <View style={styles.btnCol}>
                        <FullButton
                            variant='secondary'
                            text='Back'
                            onPress={navigation.goBack}
                        />
                    </View>
                    <View style={styles.btnCol}>
                        <FullButton
                            variant='primary'
                            text='Submit'
                            onPress={submitHandler}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FurtherAssistance;
