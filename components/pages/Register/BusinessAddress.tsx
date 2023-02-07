import FullButton from '@common/FullButton';
import LabelTextbox from '@common/LabelTextbox';
import styles from '@styles/pages/Register';
import React from 'react';
import { Text, View } from 'react-native';

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

            <View style={styles.row}>
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
