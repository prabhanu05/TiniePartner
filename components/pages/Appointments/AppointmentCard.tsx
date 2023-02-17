import { COLORS } from '@constants/Colors';
import styles from '@styles/pages/Appointments';
import PhoneCall from '@svg/PhoneCall';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Linking, Platform, Pressable, Text, View } from 'react-native';

const AppointmentCard = (props: {
    name: string;
    appointmentDate: string;
    appointmentTime: string;
    slotDate: string;
    slotTime: string;
    services: string[];
    phoneNumber: string;
}) => {
    const callHandler = () => {
        let dialer = 'telprompt:';

        if (Platform.OS === 'android') {
            dialer = 'tel:';
        }

        const number = `${dialer}${props?.phoneNumber}`;

        Linking.openURL(number);
    };

    return (
        <View style={styles.appointmentContainer}>
            <View style={styles.row}>
                <Text style={styles.dateTime}>{props?.appointmentDate}</Text>
                <Text style={styles.dateTime}>{props?.appointmentTime}</Text>
            </View>
            <LinearGradient
                colors={[COLORS.appointmentPrimaryGradient, COLORS.white]}
                style={styles.gradientContainer}
            >
                <View style={styles.justifiedRow}>
                    <Text style={styles.name}>{props?.name}</Text>
                    <View style={styles.row}>
                        <Text style={styles.slot}>slot</Text>
                        <View style={styles.row}>
                            <View style={styles.slotBox}>
                                <Text style={styles.slotTxt}>
                                    {props?.slotDate}
                                </Text>
                            </View>
                            <View style={styles.slotBox}>
                                <Text style={styles.slotTxt}>
                                    {props?.slotTime}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.tagHolder}>
                        {props?.services?.map((item, index) => (
                            <Text
                                key={`appointment_${index}`}
                                style={styles.tag}
                            >
                                {item}
                            </Text>
                        ))}
                    </View>
                    <Pressable style={styles.phoneCall} onPress={callHandler}>
                        <PhoneCall />
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    );
};

export default AppointmentCard;
