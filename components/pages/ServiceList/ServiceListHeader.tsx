import { NavigationProp } from '@models/screens';
import { useNavigation } from '@react-navigation/native';
import styles from '@styles/pages/ServiceList';
import BackIcon from '@svg/BackIcon';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const ServiceListHeader = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.topRow}>
            <Pressable onPress={navigation.goBack}>
                <BackIcon />
            </Pressable>
            <Pressable>
                <Text style={styles.addServiceBtn}>add new service</Text>
            </Pressable>
        </View>
    );
};

export default ServiceListHeader;
