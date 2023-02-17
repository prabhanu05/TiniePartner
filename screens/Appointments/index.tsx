import Head from '@common/Head';
import HeadButton from '@common/HeadButton';
import AppointmentCard from '@components/Appointments/AppointmentCard';
import ReedemCard from '@components/Appointments/ReedemCard';
import { AppointmentsHeaderModel } from '@models/data/AppointmentsModel';
import styles from '@styles/pages/Appointments';
import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const appointmentsData = [
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

const reedemData = [
    {
        id: '1',
        name: 'Hair cut (Sr Stylist)',
        appointmentDate: '23-01-2023',
        appointmentTime: '10:25 AM',
        slotDate: 'Jan 23',
        slotTime: '10:30 AM',
        orderId: '123456789',
        reedemId: 'AXK556984',
        quantity: 2,
        price: 600,
    },
    {
        id: '2',
        name: 'Hair cut (Sr Stylist)',
        appointmentDate: '23-01-2023',
        appointmentTime: '10:25 AM',
        slotDate: 'Jan 23',
        slotTime: '10:30 AM',
        orderId: '123456789',
        reedemId: 'AXK556984',
        quantity: 2,
        price: 600,
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
            {data.appointments ? (
                <FlatList
                    data={appointmentsData}
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
                        <Text style={styles.empty}>
                            No appointments scheduled
                        </Text>
                    }
                />
            ) : null}
            {data.reedem ? (
                <FlatList
                    data={reedemData}
                    keyExtractor={(item) => `reedemCard_${item?.id}`}
                    renderItem={({ item }) => (
                        <ReedemCard
                            name={item?.name}
                            appointmentDate={item?.appointmentDate}
                            appointmentTime={item?.appointmentTime}
                            slotDate={item?.slotDate}
                            slotTime={item?.slotTime}
                            orderId={item?.orderId}
                            reedemId={item?.reedemId}
                            quantity={item?.quantity}
                            price={item?.price}
                        />
                    )}
                    ListEmptyComponent={
                        <Text style={styles.empty}>No Redeems made</Text>
                    }
                />
            ) : null}
        </SafeAreaView>
    );
};

export default Appointments;
