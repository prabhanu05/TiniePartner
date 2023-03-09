import Radio from '@common/Radio';
import ServiceHeaderButton from '@components/ServiceList/ServiceHeaderButton';
import ServiceListHeader from '@components/ServiceList/ServiceListHeader';
import { FilterListModel } from '@models/api/FilterListModel';
import styles from '@styles/pages/ServiceList';
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, View } from 'react-native';
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

const ServiceList = () => {
    const [filter, setFilter] = useState<number | null>(null);

    const [active, setActive] = useState(false);

    const toggleHandler = () => {
        setActive((oldState) => !oldState);
    };

    const filterHandler = (data: FilterListModel) => {
        setFilter(data.id);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ServiceListHeader />
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
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
            </View>
            <View style={styles.border}></View>
            <View style={styles.card}>
                <View style={styles.cardUpperHolder}>
                    <View style={styles.cardUpperRow}>
                        <View style={styles.tags}>
                            <Text style={styles.tag}>HAIR CARE</Text>
                            <Text style={styles.tag}>HAIR CUT</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.serviceName}>
                                WOMEN'S HAIRCUT
                            </Text>
                            <Text style={styles.serviceTime}>90 mins</Text>
                        </View>
                    </View>
                    <Image
                        source={{
                            uri: 'https://i.ibb.co/28wKQYs/Rectangle-417.png',
                        }}
                        style={styles.cardImage}
                    />
                </View>
                <View style={styles.menuRow}>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuTitle}>MENU PRICE</Text>
                        <Text style={styles.menuPrice}>250</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuTitle}>DISCOUNT</Text>
                        <Text style={styles.menuPrice}>50</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuTitle}>APP PRICE</Text>
                        <Text style={styles.menuPrice}>200</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text style={styles.menuTitle}>online status</Text>
                        <Radio
                            isActive={active}
                            toggleHandler={toggleHandler}
                        />
                    </View>
                </View>
                <Text style={styles.description}>Description</Text>
                <TextInput
                    numberOfLines={3}
                    multiline
                    editable={false}
                    style={styles.descriptionBox}
                    value='Description and rules & regulations of the service. Limit up to 170 words about the service.'
                />
                <View style={styles.justifiedRow}>
                    <Text onPress={() => {}} style={styles.serviceBtn}>
                        delete service
                    </Text>
                    <Text onPress={() => {}} style={styles.serviceBtn}>
                        edit service details
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ServiceList;
