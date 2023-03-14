import { CategoryList } from '@api/CategoryList';
import ErrorModal from '@common/ErrorModal';
import FullButton from '@common/FullButton';
import LabelTextbox from '@common/LabelTextbox';
import Loader from '@common/Loader';
import PickerButton from '@common/PickerButton';
import Select from '@common/Select';
import { checkEmpty } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import { CategoryModel } from '@models/api/CategoryListModel';
import { FileModel } from '@models/data/FileModel';
import { ModalData } from '@models/data/ModalData';
import {
    RegisterSliceFileModel,
    RegisterSliceSelectModel,
    RegisterSliceStringModel,
} from '@models/store/RegisterSliceModel';
import { registerActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/Register';
import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

const BusinessInfo = (props: {
    nextHandler: () => void;
    backHandler: () => void;
}) => {
    const { data, isLoading } = useQuery(Keys.GET_CATEGORIES, CategoryList);

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

    const gstinHandler = (uid: keyof RegisterSliceFileModel) => {
        DocumentPicker.getDocumentAsync({
            type: ['image/jpeg', 'image/png', 'application/pdf'],
        }).then((res: DocumentPicker.DocumentResult) => {
            if (res.type === 'success') {
                const extension = res.name.split('.');
                const fileData: FileModel = {
                    name: `business-gstin.${extension[extension.length - 1]}`,
                    type: `${res.mimeType}`,
                    uri: res.uri,
                };
                dispatch(registerActions.fileHandler({ uid, item: fileData }));
            }
        });
    };

    const selectHandler = (
        uid: keyof RegisterSliceSelectModel,
        item: CategoryModel
    ) => {
        dispatch(registerActions.selectHandler({ uid, item }));
    };

    const nextHandler = () => {
        const msg = checkEmpty([
            { key: 'Business Name', value: registerData.businessName },
            {
                key: 'Year of Establishment',
                value: registerData.yearEstablished,
            },
            {
                key: 'Business PAN',
                value: registerData.pan,
            },
            {
                key: 'Business GSTIN',
                value: registerData.gstinId.name,
            },
            {
                key: 'Business Subcategory',
                value: registerData.subCategory.id,
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

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            {modal.isVisible ? (
                <ErrorModal msg={modal.message} onClose={closeModalHandler} />
            ) : null}
            <Text style={styles.heading}>Business Information</Text>
            <LabelTextbox
                label='Name of Your Business'
                placeholder='Name of Your Business*'
                value={registerData.businessName}
                onChangeText={textHandler.bind(this, 'businessName')}
            />

            <Select
                data={data!}
                value={registerData.subCategory.name}
                changeHandler={selectHandler.bind(this, 'subCategory')}
                title='Type of Business'
                label='Choose the Type of Business*'
            />

            <LabelTextbox
                label='Year of Establishment'
                placeholder='Year of Establishment (YYYY)*'
                value={registerData.yearEstablished}
                onChangeText={textHandler.bind(this, 'yearEstablished')}
                numeric
                maxLength={4}
            />
            <LabelTextbox
                label='Business GSTIN'
                placeholder='Business GSTIN*'
                value={registerData.gstinId.name}
                notEditable
                onChangeText={() => {}}
            />
            <PickerButton onPress={gstinHandler.bind(this, 'gstinId')} />
            <LabelTextbox
                label='Business PAN'
                placeholder='Enter Business PAN*'
                value={registerData.pan}
                maxLength={10}
                onChangeText={textHandler.bind(this, 'pan')}
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

export default BusinessInfo;
