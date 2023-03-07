import ServiceHeaderButton from '@components/ServiceList/ServiceHeaderButton';
import ServiceListHeader from '@components/ServiceList/ServiceListHeader';
import { FilterListModel } from '@models/api/FilterListModel';
import { ServiceListScreenProps } from '@models/screens/BottomScreens';
import styles from '@styles/pages/ServiceList';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const servicesData = [
    {
        id: 1,
        label: 'All Services',
    },
    {
        id: 2,
        label: 'Hair Care',
    },
    {
        id: 3,
        label: 'Face Care',
    },
    {
        id: 4,
        label: 'Category 3',
    },
] as FilterListModel[];

const ServiceList = ({ navigation }: ServiceListScreenProps) => {
    const [filter, setFilter] = useState<number | null>(null);

    const filterHandler = (data: FilterListModel) => {
        setFilter(data.id);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ServiceListHeader />
            <FlatList
                horizontal
                data={servicesData}
                keyExtractor={(item) => `service_${item.id}`}
                renderItem={({ item }) => (
                    <ServiceHeaderButton
                        text={item?.label}
                        isActive={item.id === filter}
                        onPress={filterHandler.bind(this, item)}
                    />
                )}
                contentContainerStyle={styles.filterBtnHolder}
            />
        </SafeAreaView>
    );
};

export default ServiceList;
