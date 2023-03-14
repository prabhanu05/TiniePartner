import { CategorySubcategoryList } from '@api/CategorySubcategoryList';
import { GetServiceList } from '@api/GetServiceList';
import Loader from '@common/Loader';
import ServiceCard from '@components/ServiceList/ServiceCard';
import ServiceHeaderButton from '@components/ServiceList/ServiceHeaderButton';
import ServiceListHeader from '@components/ServiceList/ServiceListHeader';
import { Keys } from '@constants/Keys';
import { CategoryListModel } from '@models/api/CategoryListModel';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/ServiceList';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const ServiceList = () => {
    const credentials = useSelector(
        (state: StoreModel) => state.credentialReducer
    );

    const { data: categoryData, isLoading: catSubcatLoading } = useQuery(
        Keys.SERVICE_CAT_SUBCAT,
        CategorySubcategoryList.bind(this, credentials.token!),
        {
            select(data) {
                const newData = [
                    {
                        id: 'allServices',
                        name: 'All Services',
                        subCategories: [],
                    } as CategoryListModel,
                    ...data,
                ];
                return newData;
            },
        }
    );

    const { data: serviceData, isLoading: serviceLoading } = useQuery(
        Keys.GET_ALL_SERVICES,
        GetServiceList.bind(this, credentials)
    );

    console.log(JSON.stringify(serviceData));

    const [filter, setFilter] = useState<string>('allServices');

    const filterHandler = (data: CategoryListModel) => {
        setFilter(data.id);
    };

    return (
        <SafeAreaView style={styles.container}>
            {catSubcatLoading || serviceLoading ? <Loader /> : null}
            <View>
                <ServiceListHeader />
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categoryData}
                    keyExtractor={(item) => `service_${item.id}`}
                    renderItem={({ item }) => (
                        <ServiceHeaderButton
                            text={item?.name}
                            isActive={item.id === filter}
                            onPress={filterHandler.bind(this, item)}
                        />
                    )}
                    contentContainerStyle={styles.filterBtnHolder}
                />
            </View>
            <View style={styles.border}></View>
            <ServiceCard />
        </SafeAreaView>
    );
};

export default ServiceList;
