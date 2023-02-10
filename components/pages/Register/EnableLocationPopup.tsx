import { registerActions } from '@store/actions';
import styles from '@styles/pages/Register';
import {
    getCurrentPositionAsync,
    PermissionStatus,
    requestForegroundPermissionsAsync,
    reverseGeocodeAsync,
} from 'expo-location';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const EnableLocationPopup = (props: { enablePermissions: () => void }) => {
    const dispatch = useDispatch();

    const locationHandler = async () => {
        const { status } = await requestForegroundPermissionsAsync();

        if (status === PermissionStatus.GRANTED) {
            const location = await getCurrentPositionAsync();
            dispatch(
                registerActions.latLonHandler({
                    latitude: location?.coords?.latitude,
                    longitude: location?.coords?.longitude,
                })
            );
            const data = await reverseGeocodeAsync({
                latitude: location?.coords?.latitude,
                longitude: location?.coords?.longitude,
            });

            const address = data[0];
            if (!!address) {
                let formattedAddress = '';
                if (!!address.name) {
                    formattedAddress += address.name + ', ';
                }

                if (!!address.street) {
                    formattedAddress += address.street + ', ';
                }

                if (!!address.district) {
                    formattedAddress += address.district + ', ';
                }

                if (!!address.subregion) {
                    formattedAddress += address.subregion + ', ';
                }

                formattedAddress = formattedAddress.substring(
                    0,
                    formattedAddress.length - 2
                );
                dispatch(
                    registerActions.textHandler({
                        uid: 'addressLine1',
                        text: formattedAddress,
                    })
                );
            }
            props.enablePermissions();
        }
    };

    return (
        <View style={styles.popupHolder}>
            <View style={styles.popupContainer}>
                <Text style={styles.popupTxt}>
                    Please Turn on your location for choosing accurate location
                    *
                </Text>
                <Pressable style={styles.btn} onPress={locationHandler}>
                    <Text style={styles.btnText}>Turn On Location</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default EnableLocationPopup;
