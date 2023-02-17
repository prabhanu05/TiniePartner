import { COLORS } from '@constants/Colors';
import styles from '@styles/pages/Appointments';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, Text } from 'react-native';

const ReedemButton = (props: { text: string; onPress: () => void }) => {
    return (
        <LinearGradient
            style={styles.reedemBtn}
            colors={[
                COLORS.reedemBtnPrimaryGradient,
                COLORS.reedemBtnSecondaryGradient,
            ]}
        >
            <Pressable onPress={props.onPress}>
                <Text style={styles.reedemBtnTxt}>{props.text}</Text>
            </Pressable>
        </LinearGradient>
    );
};

export default ReedemButton;
