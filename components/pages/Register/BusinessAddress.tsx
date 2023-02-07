import FullButton from '@common/FullButton';
import LabelTextbox from '@common/LabelTextbox';
import styles from '@styles/pages/Register';
import CustomMarker from '@svg/CustomMarker';
import React from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps/lib/ProviderConstants';

const BusinessAddress = (props: {
    nextHandler: () => void;
    backHandler: () => void;
}) => {
    return (
        <>
            <Text style={styles.heading}>Basic Address</Text>
            <LabelTextbox
                label='Address'
                placeholder='Address line 1'
                value=''
                notEditable
            />
            <LabelTextbox
                label='Address'
                placeholder='Address line 2'
                value=''
            />
            <LabelTextbox
                label='Address'
                placeholder='Address line 3'
                value=''
            />
            <LabelTextbox label='Pincode' placeholder='Pincode*' value='' />
            <LabelTextbox label='City' placeholder='City*' value='' />
            <LabelTextbox label='State' placeholder='State*' value='' />

            <Text style={[styles.subHeading, styles.mt12]}>
                Pin your Location
            </Text>

            <View style={styles.mapHolder}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 12.88,
                        longitude: 77.71,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    style={styles.map}
                    onRegionChangeComplete={() => null}
                />
                <View style={styles.markerFixed}>
                    <CustomMarker />
                </View>
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
                        onPress={props.nextHandler}
                    />
                </View>
            </View>
        </>
    );
};

export default BusinessAddress;
