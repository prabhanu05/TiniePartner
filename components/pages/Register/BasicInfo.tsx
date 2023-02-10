import ErrorModal from '@common/ErrorModal';
import FullButton from '@common/FullButton';
import LabelTextbox from '@common/LabelTextbox';
import PickerButton from '@common/PickerButton';
import { checkEmpty } from '@constants/Helpers';
import { FileModel } from '@models/data/FileModel';
import { ModalData } from '@models/data/ModalData';
import {
    RegisterSliceFileModel,
    RegisterSliceStringModel,
} from '@models/store/RegisterSliceModel';
import { registerActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/Register';
import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const BasicInfo = (props: {
    nextHandler: () => void;
    backHandler: () => void;
}) => {
    const [modal, setModal] = useState<ModalData>({
        isVisible: false,
        message: '',
    });

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

    const proofHandler = (uid: keyof RegisterSliceFileModel) => {
        DocumentPicker.getDocumentAsync({
            type: ['image/jpeg', 'image/png', 'application/pdf'],
        }).then((res: DocumentPicker.DocumentResult) => {
            if (res.type === 'success') {
                const extension = res.name.split('.');
                const fileData: FileModel = {
                    name: `merchant-id.${extension[extension.length - 1]}`,
                    type: `${res.mimeType}`,
                    uri: res.uri,
                };
                dispatch(registerActions.fileHandler({ uid, item: fileData }));
            }
        });
    };

    const nextHandler = () => {
        const msg = checkEmpty([
            { key: 'Business Owner Name', value: registerData.name },
            {
                key: 'Outlet Manager Name',
                value: registerData.outletManagerName,
            },
            {
                key: 'Outlet Manager Email ID',
                value: registerData.outletManagerEmail,
            },
            {
                key: 'Outlet Manager Mobile Number',
                value: registerData.outletManagePhone,
            },
            {
                key: 'Proof of Identification',
                value: !!registerData.files?.[0]?.name
                    ? registerData.files?.[0]?.name
                    : '',
            },
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

    return (
        <>
            {modal.isVisible ? (
                <ErrorModal msg={modal.message} onClose={closeModalHandler} />
            ) : null}
            <Text style={styles.heading}>Basic Information</Text>
            <Text style={styles.subHeading}>Business Owner Details</Text>
            <LabelTextbox
                label='Name'
                placeholder='Enter Name*'
                value={registerData.name}
                onChangeText={textHandler.bind(this, 'name')}
            />
            <LabelTextbox
                label='ID Proof'
                placeholder='Upload Proof of Identification*'
                value={
                    !!registerData.files?.[0]?.name
                        ? registerData.files?.[0]?.name
                        : ''
                }
                notEditable
                onChangeText={() => {}}
            />
            <PickerButton onPress={proofHandler.bind(this, 'files')} />
            <Text style={[styles.subHeading, styles.extraMargin]}>
                Outlet Manager Details
            </Text>
            <LabelTextbox
                label='Name'
                placeholder='Enter Name*'
                value={registerData.outletManagerName}
                onChangeText={textHandler.bind(this, 'outletManagerName')}
            />
            <LabelTextbox
                label='Email ID'
                placeholder='Enter Email ID*'
                value={registerData.outletManagerEmail}
                onChangeText={textHandler.bind(this, 'outletManagerEmail')}
            />
            <LabelTextbox
                label='Mobile Number'
                placeholder='Mobile Number*'
                value={registerData.outletManagePhone}
                onChangeText={textHandler.bind(this, 'outletManagePhone')}
                numeric
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
                        onPress={nextHandler}
                    />
                </View>
            </View>
        </>
    );
};

export default BasicInfo;
