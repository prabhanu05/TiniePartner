import Head from '@common/Head';
import HeadButton from '@common/HeadButton';
import AppointmentCard from '@components/Appointments/AppointmentCard';
import { AppointmentsHeaderModel } from '@models/data/AppointmentsModel';
import styles from '@styles/pages/Appointments';
import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const apiData = [
    {
        id: '1',
        name: 'Bhanu Prakash',
        appointmentDate: '23-01-2023',
        appointmentTime: '10:25 AM',
        slotDate: 'Jan 23',
        slotTime: '10:30 AM',
        phoneNumber: '8288808836',
        services: ['haircut', 'hair spa', 'hair straightening'],
    },
    {
        id: '2',
        name: 'Bhanu Prakash',
        appointmentDate: '23-01-2023',
        appointmentTime: '10:25 AM',
        slotDate: 'Jan 23',
        slotTime: '10:30 AM',
        phoneNumber: '8288808836',
        services: ['haircut', 'hair spa', 'hair straightening'],
    },
];

const Appointments = () => {
    const [data, setData] = useState<AppointmentsHeaderModel>({
        appointments: true,
        reedem: false,
    });

    const activeHandler = (uid: keyof AppointmentsHeaderModel) => {
        setData({
            appointments: false,
            reedem: false,
            [uid]: true,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Head>
                <HeadButton
                    text='Appointments'
                    isActive={data.appointments}
                    onPress={activeHandler.bind(this, 'appointments')}
                />
                <HeadButton
                    text='Redeems'
                    isActive={data.reedem}
                    onPress={activeHandler.bind(this, 'reedem')}
                />
            </Head>
            <FlatList
                data={apiData}
                keyExtractor={(item) => `appointmentCard_${item?.id}`}
                renderItem={({ item }) => (
                    <AppointmentCard
                        name={item?.name}
                        appointmentDate={item?.appointmentDate}
                        appointmentTime={item?.appointmentTime}
                        slotDate={item?.slotDate}
                        slotTime={item?.slotTime}
                        phoneNumber={item?.phoneNumber}
                        services={item?.services}
                    />
                )}
                ListEmptyComponent={
                    <Text style={styles.empty}>No appointments scheduled</Text>
                }
            />
        </SafeAreaView>
    );
};

export default Appointments;
