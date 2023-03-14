import { SalesRecords } from '@api/SalesRecords';
import FilterButton from '@common/FilterButton';
import Head from '@common/Head';
import HeadButton from '@common/HeadButton';
import Loader from '@common/Loader';
import { Keys } from '@constants/Keys';
import {
    SalesAndEarningsFilterDataModel,
    SalesAndEarningsFilterModel,
    SalesAndEarningsStateModel,
} from '@models/data/SalesAndEarningsModel';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/SalesAndEarnings';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const SalesAndEarnings = () => {
    const [show, setShow] = useState<SalesAndEarningsStateModel>({
        sales: true,
        earnings: false,
    });

    const [filterData, setFilterData] = useState<SalesAndEarningsFilterModel>({
        today: true,
        thisWeek: false,
        thisMonth: false,
        lastMonth: false,
    });

    const credentials = useSelector(
        (state: StoreModel) => state.credentialReducer
    );

    const { isLoading: salesLoading, data: salesData } = useQuery(
        Keys.GET_SALES_DETAILS,
        SalesRecords.bind(this, {
            businessId: credentials.businessId!,
            token: credentials.token!,
        })
    );

    const activeHandler = (uid: keyof SalesAndEarningsStateModel) => {
        setShow({
            sales: false,
            earnings: false,
            [uid]: true,
        });
    };

    const filters: SalesAndEarningsFilterDataModel[] = [
        {
            name: 'today',
            id: 'today',
        },
        {
            name: 'this week',
            id: 'thisWeek',
        },
        {
            name: 'this month',
            id: 'thisMonth',
        },
        {
            name: 'last month',
            id: 'lastMonth',
        },
    ];

    const filterHandler = (uid: keyof SalesAndEarningsFilterModel) => {
        setFilterData({
            today: false,
            thisWeek: false,
            thisMonth: false,
            lastMonth: false,
            [uid]: true,
        });
    };

    console.log(salesData);

    return (
        <SafeAreaView style={styles.container}>
            {salesLoading ? <Loader /> : null}
            <Head enableBack>
                <HeadButton
                    text='Sales'
                    isActive={show.sales}
                    onPress={activeHandler.bind(this, 'sales')}
                />
                <HeadButton
                    text='Earnings'
                    isActive={show.earnings}
                    onPress={activeHandler.bind(this, 'earnings')}
                />
            </Head>
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={filters}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.filterBtnHolder}
                    renderItem={({ item }) => (
                        <FilterButton
                            text={item.name}
                            onPress={filterHandler.bind(this, item.id)}
                            isActive={filterData[item.id]}
                        />
                    )}
                />
            </View>

            <View style={styles.saleContainer}>
                <View style={styles.saleHeaderRow}>
                    <View style={styles.bigBox}>
                        <Text style={styles.headerText}>Item name</Text>
                    </View>
                    <View style={styles.extraSmallBox}></View>
                    <View style={styles.smallBox}>
                        <Text style={styles.headerText}>Price</Text>
                    </View>
                    <View style={styles.smallBox}>
                        <Text style={styles.headerText}>Quantity</Text>
                    </View>
                </View>
                <View style={styles.saleRow}>
                    <View style={styles.bigBox}>
                        <Text style={styles.saleText}>Service Title 1</Text>
                    </View>
                    <View style={styles.extraSmallBox}>
                        <Text style={styles.saleText}>-</Text>
                    </View>
                    <View style={styles.smallBox}>
                        <Text style={styles.saleText}>200</Text>
                    </View>
                    <View style={styles.smallBox}>
                        <Text style={styles.saleText}>20</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.empty}>No appointments scheduled</Text>
        </SafeAreaView>
    );
};

export default SalesAndEarnings;
