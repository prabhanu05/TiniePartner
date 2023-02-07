import FullButton from '@common/FullButton';
import LabelTextbox from '@common/LabelTextbox';
import PickerButton from '@common/PickerButton';
import styles from '@styles/pages/Register';
import React from 'react';
import { Text, View } from 'react-native';

const BusinessInfo = (props: {
    nextHandler: () => void;
    backHandler: () => void;
}) => {
    return (
        <>
            <Text style={styles.heading}>Business Information</Text>
            <LabelTextbox
                label='Name of Your Business'
                placeholder='Name of Your Business*'
                value=''
            />
            <LabelTextbox
                label='Year of Establishment'
                placeholder='Year of Establishment (YYYY)*'
                value=''
                numeric
                maxLength={4}
            />
            <LabelTextbox
                label='Business GSTIN'
                placeholder='Business GSTIN*'
                value=''
                notEditable
            />
            <PickerButton onPress={() => {}} />
            <LabelTextbox
                label='Business PAN'
                placeholder='Business PAN*'
                value=''
                notEditable
            />
            <PickerButton onPress={() => {}} />
            <LabelTextbox
                label='Business License'
                placeholder='Business License*'
                value=''
                notEditable
            />
            <PickerButton onPress={() => {}} />
            <LabelTextbox
                label='Incorporation Certificate'
                placeholder='Incorporation Certificate*'
                value=''
                notEditable
            />
            <PickerButton onPress={() => {}} />
            <LabelTextbox
                label='MCC of Business'
                placeholder='MCC of Business*'
                value=''
                notEditable
            />
            <PickerButton onPress={() => {}} />

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

export default BusinessInfo;
