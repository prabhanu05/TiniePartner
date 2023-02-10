import Checkbox from '@common/Checkbox';
import FullButton from '@common/FullButton';
import Header from '@common/Header';
import { SCREENS } from '@models/screens';
import { FurtherAssistanceScreenProps } from '@models/screens/StackScreens';
import {
    RegisterSliceStringModel,
    RegisterSliceToggleModel,
} from '@models/store/RegisterSliceModel';
import { registerActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/FurtherAssistance';
import Info from '@svg/Info';
import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

const FurtherAssistance = ({ navigation }: FurtherAssistanceScreenProps) => {
    const registerData = useSelector(
        (state: StoreModel) => state.registerReducer
    );

    const dispatch = useDispatch();

    const submitHandler = () => {
        navigation.navigate(SCREENS.SET_PASSCODE);
    };

    const toggleHandler = (uid: keyof RegisterSliceToggleModel) => {
        dispatch(registerActions.toggleHandler({ uid }));
    };

    const textHandler = (uid: keyof RegisterSliceStringModel, text: string) => {
        dispatch(registerActions.textHandler({ uid, text }));
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
                <Pressable
                    onPress={toggleHandler.bind(this, 'bms')}
                    style={styles.row}
                >
                    <Text style={styles.txt}>Booking Management Services</Text>
                    <Checkbox isSelected={registerData.bms} />
                </Pressable>
                <Pressable
                    onPress={toggleHandler.bind(this, 'offAndOn')}
                    style={styles.row}
                >
                    <Text style={styles.txt}>
                        Offline and Online Billing Integration
                    </Text>
                    <Checkbox isSelected={registerData.offAndOn} />
                </Pressable>
                <Pressable
                    style={styles.row}
                    onPress={toggleHandler.bind(this, 'sms')}
                >
                    <Text style={styles.txt}>Staff Management Services</Text>
                    <Checkbox isSelected={registerData.sms} />
                </Pressable>
                <Pressable
                    style={styles.row}
                    onPress={toggleHandler.bind(this, 'ims')}
                >
                    <Text style={styles.txt}>
                        Inventory Management Services
                    </Text>
                    <Checkbox isSelected={registerData.ims} />
                </Pressable>
                <Pressable
                    style={styles.row}
                    onPress={toggleHandler.bind(this, 'sfc')}
                >
                    <View style={styles.holder}>
                        <Text style={styles.txt}>Sales Focused Campaigns</Text>
                        <Text style={styles.subtxt}>
                            (Solely focuses on sales - Might be required to
                            offer discounts)
                        </Text>
                    </View>
                    <Checkbox isSelected={registerData.sfc} />
                </Pressable>

                <Pressable
                    style={styles.row}
                    onPress={toggleHandler.bind(this, 'bri')}
                >
                    <Text style={styles.txt}>
                        Business reports and Insights
                    </Text>
                    <Checkbox isSelected={registerData.bri} />
                </Pressable>

                <Pressable
                    style={styles.row}
                    onPress={toggleHandler.bind(this, 'pos')}
                >
                    <Text style={styles.txt}>Point of Sales (POS) System</Text>
                    <Checkbox isSelected={registerData.pos} />
                </Pressable>

                <Pressable
                    style={styles.row}
                    onPress={toggleHandler.bind(this, 'tax')}
                >
                    <Text style={styles.txt}>Tax services</Text>
                    <Checkbox isSelected={registerData.tax} />
                </Pressable>
                <View style={styles.col}>
                    <Text style={styles.txt}>
                        If any other, Please Specify:
                    </Text>
                    <TextInput
                        style={styles.textArea}
                        textAlignVertical='top'
                        numberOfLines={4}
                        onChangeText={textHandler.bind(
                            this,
                            'anyOtherAssistance'
                        )}
                    />
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
