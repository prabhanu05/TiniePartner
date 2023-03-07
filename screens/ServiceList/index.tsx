import ServiceListHeader from '@components/ServiceList/ServiceListHeader';
import { ServiceListScreenProps } from '@models/screens/BottomScreens';
import styles from '@styles/pages/ServiceList';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ServiceList = ({ navigation }: ServiceListScreenProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <ServiceListHeader />
        </SafeAreaView>
    );
};

export default ServiceList;
