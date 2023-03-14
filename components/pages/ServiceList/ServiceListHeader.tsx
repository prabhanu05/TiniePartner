import { NavigationProp, SCREENS } from '@models/screens';
import { useNavigation } from '@react-navigation/native';
import styles from '@styles/pages/ServiceList';
import BackIcon from '@svg/BackIcon';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const ServiceListHeader = () => {
    const navigation = useNavigation<NavigationProp>();

    const navigateHandler = (screen: SCREENS) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.topRow}>
            <Pressable
                onPress={navigateHandler.bind(this, SCREENS.APPOINTMENTS)}
            >
                <BackIcon />
            </Pressable>
            <Pressable
                onPress={navigateHandler.bind(this, SCREENS.ADD_SERVICE)}
            >
                <Text style={styles.addServiceBtn}>add new service</Text>
            </Pressable>
        </View>
    );
};

export default ServiceListHeader;
