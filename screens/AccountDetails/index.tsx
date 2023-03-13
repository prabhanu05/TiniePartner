import { CategoryList } from '@api/CategoryList';
import { GetAccountDetails } from '@api/GetAccountDetails';
import Button from '@common/Button';
import FullButton from '@common/FullButton';
import Head from '@common/Head';
import HeadButton from '@common/HeadButton';
import LabelTextbox from '@common/LabelTextbox';
import Loader from '@common/Loader';
import Select from '@common/Select';
import { Keys } from '@constants/Keys';
import {
    AccountDetailsDataModel,
    AccountDetailsHeaderModel,
} from '@models/data/AccountDetailsModel';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/BusinessDetails';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const AccountDetails = () => {
    const token = useSelector(
        (state: StoreModel) => state.credentialReducer.token
    );

    const { data: categoryData, isLoading: categoryLoading } = useQuery(
        Keys.GET_CATEGORIES,
        CategoryList
    );

    const { data: accountData, isLoading: accountLoading } = useQuery(
        Keys.ACCOUNT_DETAILS,
        GetAccountDetails.bind(this, token!)
    );

    const [data, setData] = useState<AccountDetailsHeaderModel>({
        viewDetails: true,
        editDetails: false,
    });

    const [state, setState] = useState<AccountDetailsDataModel>({
        name: !!accountData?.name ? accountData?.name : '',
        email: !!accountData?.email ? accountData?.email : '',
        mobile: !!accountData?.phoneNumber
            ? accountData?.phoneNumber.toString()
            : '',
        businessName: !!accountData?.businessDetailsResponse?.[0]?.name
            ? accountData?.businessDetailsResponse?.[0]?.name
            : '',
        typeOfBusiness: {
            id: !!accountData?.businessDetailsResponse?.[0]?.subCategoryId
                ? accountData?.businessDetailsResponse?.[0]?.subCategoryId?.toString()
                : '',
            name: '',
        },
        businessGstin: {
            name: '',
            type: '',
            uri: '',
        },
        businessPan: !!accountData?.businessDetailsResponse?.[0]?.pan
            ? accountData?.businessDetailsResponse?.[0]?.pan
            : '',
    });

    const activeHandler = (uid: keyof AccountDetailsHeaderModel) => {
        setData({
            viewDetails: false,
            editDetails: false,
            [uid]: true,
        });
    };

    return (
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
            {categoryLoading || accountLoading ? <Loader /> : null}
            <ScrollView contentContainerStyle={styles.list}>
                {data.viewDetails ? (
                    <>
                        <View style={styles.box}>
                            <Text style={styles.heading}>
                                Basic Information
                            </Text>
                            <View style={styles.row}>
                                <Text style={[styles.colLeft, styles.label]}>
                                    Name:
                                </Text>
                                <Text style={[styles.colRight, styles.txt]}>
                                    {accountData?.name}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.colLeft, styles.label]}>
                                    Email ID:
                                </Text>
                                <Text style={[styles.colRight, styles.txt]}>
                                    {accountData?.email}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.colLeft, styles.label]}>
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
                                <Text style={[styles.colLeft, styles.label]}>
                                    Business Name:
                                </Text>
                                <Text style={[styles.colRight, styles.txt]}>
                                    {
                                        accountData
                                            ?.businessDetailsResponse?.[0]?.name
                                    }
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.colLeft, styles.label]}>
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
                                <Text style={[styles.colLeft, styles.label]}>
                                    Business GSTIN:
                                </Text>
                                <Text style={[styles.colRight, styles.txt]}>
                                    --- TO BE FILLED ---
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={[styles.colLeft, styles.label]}>
                                    Business PAN:
                                </Text>
                                <Text style={[styles.colRight, styles.txt]}>
                                    {
                                        accountData
                                            ?.businessDetailsResponse?.[0]?.pan
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
                                />
                            </View>
                            <View style={styles.row}>
                                <LabelTextbox
                                    label='Email ID'
                                    placeholder='Enter Email ID*'
                                    value={state.email}
                                />
                            </View>
                            <View style={styles.row}>
                                <LabelTextbox
                                    label='Mobile Number'
                                    placeholder='Mobile Number*'
                                    value={state.mobile}
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
                                />
                            </View>
                            <Select
                                data={categoryData || []}
                                value={state.typeOfBusiness.name}
                                changeHandler={() => {}}
                                title='Type of Business'
                                id='subCategory'
                                label='Choose the Type of Business*'
                            />
                            <View style={styles.row}>
                                <LabelTextbox
                                    label='Business GSTIN'
                                    placeholder='Business GSTIN*'
                                    value={state.businessGstin.name}
                                />
                            </View>
                            <View style={styles.row}>
                                <LabelTextbox
                                    label='Business PAN'
                                    placeholder='Business PAN*'
                                    value={state.businessPan}
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
                            <FullButton variant='primary' text='Save' />
                        </View>
                    </>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
};

export default AccountDetails;
