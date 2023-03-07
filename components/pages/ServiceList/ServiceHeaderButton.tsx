import { COLORS } from '@constants/Colors';
import styles from '@styles/pages/ServiceList';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, Text } from 'react-native';

const ServiceHeaderButton = (props: {
    text: string;
    isActive: boolean;
    onPress: () => void;
}) => {
    return (
        <>
            {props.isActive ? (
                <LinearGradient
                    colors={[COLORS.primaryGradient, COLORS.secondaryGradient]}
                    style={styles.activeFilterBtn}
                >
                    <Pressable onPress={props.onPress}>
                        <Text style={styles.filterBtnTxt}>{props.text}</Text>
                    </Pressable>
                </LinearGradient>
            ) : (
                <Pressable style={styles.filterBtn} onPress={props.onPress}>
                    <Text style={styles.filterBtnTxt}>{props.text}</Text>
                </Pressable>
            )}
        </>
    );
};

export default ServiceHeaderButton;
