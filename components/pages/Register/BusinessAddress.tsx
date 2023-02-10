import ErrorModal from '@common/ErrorModal';
import FullButton from '@common/FullButton';
import LabelTextbox from '@common/LabelTextbox';
import EnableLocationPopup from '@components/Register/EnableLocationPopup';
import { checkEmpty } from '@constants/Helpers';
import { ModalData } from '@models/data/ModalData';
import { RegisterSliceStringModel } from '@models/store/RegisterSliceModel';
import { registerActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/Register';
import CustomMarker from '@svg/CustomMarker';
import {
    PermissionStatus,
    reverseGeocodeAsync,
    useForegroundPermissions,
} from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';

const BusinessAddress = (props: {
    nextHandler: () => void;
    backHandler: () => void;
}) => {
    const [modal, setModal] = useState<ModalData>({
        isVisible: false,
        message: '',
    });

    const [locationPermissionInformation] = useForegroundPermissions();

    const [hasPermissions, setHasPermissions] = useState(false);

    const registerData = useSelector(
        (state: StoreModel) => state.registerReducer
    );

    const dispatch = useDispatch();

    const textHandler = (uid: keyof RegisterSliceStringModel, text: string) => {
        dispatch(registerActions.textHandler({ uid, text }));
    };

    const closeModalHandler = () => {
        setModal({
            isVisible: false,
            message: '',
        });
    };

    const nextHandler = () => {
        const msg = checkEmpty([
            { key: 'Address Line 1', value: registerData.addressLine1 },
            { key: 'Address Line 2', value: registerData.addressLine2 },
            { key: 'Address Line 3', value: registerData.addressLine3 },
            { key: 'Pincode', value: registerData.pin },
            { key: 'City', value: registerData.city },
            { key: 'State', value: registerData.state },
        ]);

        if (!!msg) {
            setModal({
                isVisible: true,
                message: msg,
            });
            return;
        }
        props.nextHandler();
    };

    const enablePermissions = () => {
        setHasPermissions(true);
    };

    const regionHandler = async ({ latitude, longitude }: Region) => {
        dispatch(registerActions.latLonHandler({ latitude, longitude }));
        const data = await reverseGeocodeAsync({
            latitude,
            longitude,
        });

        const address = data[0];
        if (!!address) {
            let formattedAddress = '';
            if (!!address.name && address.name !== 'Unnamed Road') {
                formattedAddress += address.name + ', ';
            }

            if (!!address.street && address.street !== 'Unnamed Road') {
                formattedAddress += address.street + ', ';
            }

            if (!!address.district && address.district !== 'Unnamed Road') {
                formattedAddress += address.district + ', ';
            }

            if (!!address.subregion && address.subregion !== 'Unnamed Road') {
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
    };

    useEffect(() => {
        if (
            locationPermissionInformation?.status === PermissionStatus.GRANTED
        ) {
            enablePermissions();
        }
    }, [locationPermissionInformation?.status]);

    return (
        <>
            {modal.isVisible ? (
                <ErrorModal msg={modal.message} onClose={closeModalHandler} />
            ) : null}

            <Text style={styles.heading}>Basic Address</Text>
            <LabelTextbox
                label='Address'
                placeholder='Address line 1'
                value={registerData.addressLine1}
                notEditable
                onChangeText={() => {}}
            />
            <LabelTextbox
                label='Address'
                placeholder='Address line 2'
                value={registerData.addressLine2}
                onChangeText={textHandler.bind(this, 'addressLine2')}
            />
            <LabelTextbox
                label='Address'
                placeholder='Address line 3'
                value={registerData.addressLine3}
                onChangeText={textHandler.bind(this, 'addressLine3')}
            />
            <LabelTextbox
                label='Pincode'
                placeholder='Pincode*'
                value={registerData.pin}
                onChangeText={textHandler.bind(this, 'pin')}
                numeric
                maxLength={6}
            />
            <LabelTextbox
                label='City'
                placeholder='City*'
                value={registerData.city}
                onChangeText={textHandler.bind(this, 'city')}
            />
            <LabelTextbox
                label='State'
                placeholder='State*'
                value={registerData.state}
                onChangeText={textHandler.bind(this, 'state')}
            />

            <Text style={[styles.subHeading, styles.mt12]}>
                Pin your Location
            </Text>

            <View style={styles.mapHolder}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: !!registerData.latitude
                            ? registerData.latitude
                            : 12.88,
                        longitude: !!registerData.longitude
                            ? registerData.longitude
                            : 77.71,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    style={styles.map}
                    onRegionChangeComplete={regionHandler}
                />

                {hasPermissions ? (
                    <View style={styles.markerFixed}>
                        <CustomMarker />
                    </View>
                ) : (
                    <EnableLocationPopup
                        enablePermissions={enablePermissions}
                    />
                )}
            </View>

            <View style={[styles.row, styles.mt12]}>
                <View style={styles.col}>
                    <FullButton
                        variant='secondary'
                        text='Back'
                        onPress={props.backHandler}
                    />
                </View>
                <View style={styles.col}>
                    <FullButton
                        variant='primary'
                        text='Proceed'
                        onPress={nextHandler}
                    />
                </View>
            </View>
        </>
    );
};

export default BusinessAddress;
