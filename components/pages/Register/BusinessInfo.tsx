import { CategoryList } from '@api/CategoryList';
import FullButton from '@common/FullButton';
import LabelTextbox from '@common/LabelTextbox';
import Loader from '@common/Loader';
import PickerButton from '@common/PickerButton';
import Select from '@common/Select';
import { Keys } from '@constants/Keys';
import styles from '@styles/pages/Register';
import * as DocumentPicker from 'expo-document-picker';
import { DocumentResult } from 'expo-document-picker/build/types';
import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from 'react-query';

const BusinessInfo = (props: {
    nextHandler: () => void;
    backHandler: () => void;
}) => {
    const { data, isLoading } = useQuery(Keys.GET_CATEGORIES, CategoryList);

    const gstinHandler = () => {
        DocumentPicker.getDocumentAsync({
            type: ['image/jpeg', 'image/png', 'application/pdf'],
        }).then((res: DocumentResult) => console.log(res));
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Text style={styles.heading}>Business Information</Text>
            <LabelTextbox
                label='Name of Your Business'
                placeholder='Name of Your Business*'
                value=''
            />

            <Select
                data={data!}
                value=''
                changeHandler={() => {}}
                title='Type of Business'
                id='s'
                label='Choose the Type of Business*'
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
            <PickerButton onPress={gstinHandler} />
            <LabelTextbox
                label='Business PAN'
                placeholder='Enter Business PAN*'
                value=''
                maxLength={10}
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

export default BusinessInfo;
