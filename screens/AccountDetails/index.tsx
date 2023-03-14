import { CategoryList } from '@api/CategoryList';
import { GetAccountDetails } from '@api/GetAccountDetails';
import { UpdateMerchant } from '@api/UpdateMerchant';
import Button from '@common/Button';
import ErrorModal from '@common/ErrorModal';
import FullButton from '@common/FullButton';
import Head from '@common/Head';
import HeadButton from '@common/HeadButton';
import LabelTextbox from '@common/LabelTextbox';
import Loader from '@common/Loader';
import Select from '@common/Select';
import { checkEmpty, isNumeric } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import { CategoryModel } from '@models/api/CategoryListModel';
import {
    AccountDetailsDataModel,
    AccountDetailsHeaderModel,
    AccountDetailsPayloadModel,
} from '@models/data/AccountDetailsModel';
import { AxiosErrorMessage } from '@models/data/AxiosErrorMessage';
import { ModalData } from '@models/data/ModalData';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/BusinessDetails';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const AccountDetails = () => {
    const [state, setState] = useState<AccountDetailsDataModel>({
        name: '',
        email: '',
        mobile: '',
        businessName: '',
        typeOfBusiness: {
            id: '',
            name: '',
        },
        businessPan: '',
    });

    const [modal, setModal] = useState<ModalData>({
        isVisible: false,
        message: '',
    });

    const credentials = useSelector(
        (state: StoreModel) => state.credentialReducer
    );

    const { data: categoryData, isLoading: categoryLoading } = useQuery(
        Keys.GET_CATEGORIES,
        CategoryList
    );

    const {
        data: accountData,
        isLoading: accountLoading,
        isFetching,
        refetch,
    } = useQuery(
        Keys.ACCOUNT_DETAILS,
        GetAccountDetails.bind(this, credentials.token!),
        {
            onSuccess(data) {
                setState({
                    name: data?.name,
                    email: data?.email,
                    mobile: data?.phoneNumber?.toString(),
                    businessName: data?.businessDetailsResponse?.[0]?.name,
                    businessPan: data?.businessDetailsResponse?.[0]?.pan,
                    typeOfBusiness: {
                        id: data?.businessDetailsResponse?.[0]?.subCategoryId?.toString(),
                        name: data?.businessDetailsResponse?.[0]?.type,
                    },
                });
            },
        }
    );

    const { isLoading: merchantLoading, mutateAsync } = useMutation(
        Keys.UPDATE_MERCHANT,
        UpdateMerchant
    );

    const [data, setData] = useState<AccountDetailsHeaderModel>({
        viewDetails: true,
        editDetails: false,
    });

    const activeHandler = (uid: keyof AccountDetailsHeaderModel) => {
        setData({
            viewDetails: false,
            editDetails: false,
            [uid]: true,
        });
    };

    const textHandler = (uid: keyof AccountDetailsDataModel, text: string) => {
        setState((oldState) => ({
            ...oldState,
            [uid]: text,
        }));
    };

    const selectHandler = (
        uid: keyof AccountDetailsDataModel,
        item: CategoryModel
    ) => {
        setState((oldState) => ({
            ...oldState,
            [uid]: item,
        }));
    };

    const closeModalHandler = () => {
        setModal({
            isVisible: false,
            message: '',
        });
    };

    const saveHandler = async () => {
        const msg = checkEmpty([
            {
                key: 'Name',
                value: state.name,
            },
            {
                key: 'Email ID',
                value: state.email,
            },
            {
                key: 'Mobile Number',
                value: state.mobile,
            },
            {
                key: 'Business Name',
                value: state.businessName,
            },
            {
                key: 'Business Type',
                value: state.typeOfBusiness.id,
            },
            {
                key: 'Business PAN',
                value: state.businessPan,
            },
        ]);

        if (!!msg) {
            setModal({
                isVisible: true,
                message: msg,
            });
            return;
        }

        if (state.businessPan.length !== 10) {
            setModal({
                isVisible: true,
                message: 'Please enter a valid PAN number',
            });
            return;
        }

        if (state.mobile.length !== 10 || isNumeric(state.mobile) === false) {
            setModal({
                isVisible: true,
                message: 'Please enter a valid Mobile number',
            });
            return;
        }

        const payloadData: AccountDetailsPayloadModel = {
            businessId: credentials.businessId!,
            businessType: state.typeOfBusiness.name,
            businessName: state.businessName,
            email: state.email,
            merchantId: credentials.merchantId!,
            name: state.name,
            pan: state.businessPan,
            phoneNumber: state.mobile,
            token: credentials.token!,
        };

        await mutateAsync(payloadData)
            .then((resp) => {
                if (resp === true) {
                    refetch();
                    activeHandler('viewDetails');
                }
            })
            .catch((err: AxiosErrorMessage) => {
                setModal({
                    isVisible: true,
                    message: !!err?.response?.data?.status
                        ? err?.response?.data?.status
                        : 'Unable to update details this time! Please try again later.',
                });
            });
    };

    return (
        <>
            {modal.isVisible ? (
                <ErrorModal msg={modal.message} onClose={closeModalHandler} />
            ) : null}
            <SafeAreaView style={styles.container}>
                <View style={styles.p16}>
                    <Head enableBack>
                        <HeadButton
                            text='Account Details'
                            isActive={data.viewDetails}
                            onPress={activeHandler.bind(this, 'viewDetails')}
                        />
                        <HeadButton
                            text='Edit Account Details'
                            isActive={data.editDetails}
                            onPress={activeHandler.bind(this, 'editDetails')}
                        />
                    </Head>
                </View>
                {categoryLoading ||
                accountLoading ||
                merchantLoading ||
                isFetching ? (
                    <Loader />
                ) : null}
                <ScrollView contentContainerStyle={styles.list}>
                    {data.viewDetails ? (
                        <>
                            <View style={styles.box}>
                                <Text style={styles.heading}>
                                    Basic Information
                                </Text>
                                <View style={styles.row}>
                                    <Text
                                        style={[styles.colLeft, styles.label]}
                                    >
                                        Name:
                                    </Text>
                                    <Text style={[styles.colRight, styles.txt]}>
                                        {accountData?.name}
                                    </Text>
                                </View>
                                <View style={styles.row}>
                                    <Text
                                        style={[styles.colLeft, styles.label]}
                                    >
                                        Email ID:
                                    </Text>
                                    <Text style={[styles.colRight, styles.txt]}>
                                        {accountData?.email}
                                    </Text>
                                </View>
                                <View style={styles.row}>
                                    <Text
                                        style={[styles.colLeft, styles.label]}
                                    >
                                        Personal Mobile:
                                    </Text>
                                    <Text style={[styles.colRight, styles.txt]}>
                                        {accountData?.phoneNumber}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.heading}>
                                    Business Information
                                </Text>
                                <View style={styles.row}>
                                    <Text
                                        style={[styles.colLeft, styles.label]}
                                    >
                                        Business Name:
                                    </Text>
                                    <Text style={[styles.colRight, styles.txt]}>
                                        {
                                            accountData
                                                ?.businessDetailsResponse?.[0]
                                                ?.name
                                        }
                                    </Text>
                                </View>
                                <View style={styles.row}>
                                    <Text
                                        style={[styles.colLeft, styles.label]}
                                    >
                                        Business Type:
                                    </Text>
                                    <Text style={[styles.colRight, styles.txt]}>
                                        {
                                            accountData
                                                ?.businessDetailsResponse?.[0]
                                                ?.subCategoryId
                                        }
                                    </Text>
                                </View>
                                <View style={styles.row}>
                                    <Text
                                        style={[styles.colLeft, styles.label]}
                                    >
                                        Business PAN:
                                    </Text>
                                    <Text style={[styles.colRight, styles.txt]}>
                                        {
                                            accountData
                                                ?.businessDetailsResponse?.[0]
                                                ?.pan
                                        }
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.btn}>
                                <Button
                                    text='Edit Account Information'
                                    onPress={activeHandler.bind(
                                        this,
                                        'editDetails'
                                    )}
                                />
                            </View>
                        </>
                    ) : null}

                    {data.editDetails ? (
                        <>
                            <View style={styles.box}>
                                <Text style={styles.editHeading}>
                                    Basic Information
                                </Text>
                                <View style={styles.row}>
                                    <LabelTextbox
                                        label='Name'
                                        placeholder='Enter Name*'
                                        value={state.name}
                                        onChangeText={textHandler.bind(
                                            this,
                                            'name'
                                        )}
                                    />
                                </View>
                                <View style={styles.row}>
                                    <LabelTextbox
                                        label='Email ID'
                                        placeholder='Enter Email ID*'
                                        value={state.email}
                                        onChangeText={textHandler.bind(
                                            this,
                                            'name'
                                        )}
                                    />
                                </View>
                                <View style={styles.row}>
                                    <LabelTextbox
                                        label='Mobile Number'
                                        placeholder='Mobile Number*'
                                        value={state.mobile}
                                        onChangeText={textHandler.bind(
                                            this,
                                            'mobile'
                                        )}
                                        maxLength={10}
                                        numeric
                                    />
                                </View>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.editHeading}>
                                    Business Information
                                </Text>
                                <View style={styles.row}>
                                    <LabelTextbox
                                        label='Name of Your Business'
                                        placeholder='Name of Your Business*'
                                        value={state.businessName}
                                        onChangeText={textHandler.bind(
                                            this,
                                            'businessName'
                                        )}
                                    />
                                </View>
                                <Select
                                    data={categoryData || []}
                                    value={state.typeOfBusiness.name}
                                    changeHandler={selectHandler.bind(
                                        this,
                                        'typeOfBusiness'
                                    )}
                                    title='Type of Business'
                                    label='Choose the Type of Business*'
                                />
                                <View style={styles.row}>
                                    <LabelTextbox
                                        label='Business PAN'
                                        placeholder='Business PAN*'
                                        value={state.businessPan}
                                        onChangeText={textHandler.bind(
                                            this,
                                            'businessPan'
                                        )}
                                        maxLength={10}
                                    />
                                </View>
                            </View>
                            <View style={styles.btnRow}>
                                <FullButton
                                    variant='tertiary'
                                    text='Cancel'
                                    onPress={activeHandler.bind(
                                        this,
                                        'viewDetails'
                                    )}
                                />
                                <FullButton
                                    variant='primary'
                                    text='Save'
                                    onPress={saveHandler}
                                />
                            </View>
                        </>
                    ) : null}
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default AccountDetails;
