import { COLORS } from '@constants/Colors';
import styles from '@styles/pages/Appointments';
import Reedem from '@svg/Reedem';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const ReedemCard = (props: {
    name: string;
    appointmentDate: string;
    appointmentTime: string;
    slotDate: string;
    slotTime: string;
    orderId: string;
    reedemId: string;
    quantity: number;
    price: number;
}) => {
    return (
        <View style={styles.appointmentContainer}>
            <View style={styles.row}>
                <Text style={styles.dateTime}>{props?.appointmentDate}</Text>
                <Text style={styles.dateTime}>{props?.appointmentTime}</Text>
            </View>
            <LinearGradient
                colors={[COLORS.reedemPrimaryGradient, COLORS.white]}
                style={styles.reedemGradientContainer}
            >
                <View style={styles.justifiedReedemRow}>
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
                    <View style={styles.idHolder}>
                        <View style={styles.smallRow}>
                            <Text style={styles.subHeading}>Order ID</Text>
                            <Text style={styles.heading}>{props?.orderId}</Text>
                        </View>
                        <View style={styles.smallRow}>
                            <Text style={styles.subHeading}>redeem ID</Text>
                            <Text style={styles.heading}>
                                {props?.reedemId}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.reedemHolder}>
                        <Text style={styles.qty}>Qty. {props?.quantity}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>price</Text>
                            <Text style={styles.priceNum}>{props?.price}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.reedemTxt}>redeemed</Text>
                            <Reedem />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

export default ReedemCard;
