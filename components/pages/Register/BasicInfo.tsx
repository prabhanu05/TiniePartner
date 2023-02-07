import FullButton from '@common/FullButton';
import LabelTextbox from '@common/LabelTextbox';
import PickerButton from '@common/PickerButton';
import styles from '@styles/pages/Register';
import React from 'react';
import { Text, View } from 'react-native';

const BasicInfo = (props: {
    nextHandler: () => void;
    backHandler: () => void;
}) => {
    return (
        <>
            <Text style={styles.heading}>Basic Information</Text>
            <Text style={styles.subHeading}>Business Owner Details</Text>
            <LabelTextbox label='Name' placeholder='Enter Name*' value='' />
            <LabelTextbox
                label='ID Proof'
                placeholder='Upload Proof of Identification*'
                value=''
            />
            <PickerButton onPress={() => {}} />
            <Text style={[styles.subHeading, styles.extraMargin]}>
                Outlet Manager Details
            </Text>
            <LabelTextbox label='Name' placeholder='Enter Name*' value='' />
            <LabelTextbox
                label='Email ID'
                placeholder='Enter Email ID*'
                value=''
            />
            <LabelTextbox
                label='Mobile Number'
                placeholder='Mobile Number*'
                value=''
            />
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
                        text='Next'
                        onPress={props.nextHandler}
                    />
                </View>
            </View>
        </>
    );
};

export default BasicInfo;
