import Head from '@common/Head';
import HeadButton from '@common/HeadButton';
import AppointmentCard from '@components/Appointments/AppointmentCard';
import ReedemButton from '@components/Appointments/ReedemButton';
import ReedemCard from '@components/Appointments/ReedemCard';
import ReedemCodeModal from '@components/Appointments/ReedemCodeModal';
import { AppointmentsHeaderModel } from '@models/data/AppointmentsModel';
import { SCREENS } from '@models/screens';
import { AppointmentsScreenProps } from '@models/screens/BottomScreens';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/Appointments';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

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

const reedemData = {
    totalOrdersReedemed: 5,
    data: [
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
    ],
};

const Appointments = ({ navigation }: AppointmentsScreenProps) => {
    const [data, setData] = useState<AppointmentsHeaderModel>({
        appointments: true,
        reedem: false,
    });

    const credentials = useSelector(
        (state: StoreModel) => state.credentialReducer
    );

    // const { data: apiData, isLoading } = useQuery(
    //     Keys.GET_APPOINTMENTS,
    //     AppointmentList.bind(this, credentials)
    // );

    console.log(credentials);

    const [modal, setModal] = useState(false);

    const activeHandler = (uid: keyof AppointmentsHeaderModel) => {
        setData({
            appointments: false,
            reedem: false,
            [uid]: true,
        });
    };

    const codeModalHandler = () => {
        setModal((oldState) => !oldState);
    };

    const scanCodeHandler = () => {
        navigation.navigate(SCREENS.BARCODE);
    };

    return (
        <>
            {modal ? <ReedemCodeModal onToggle={codeModalHandler} /> : null}
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
                    <>
                        <View style={styles.reedemRow}>
                            <View style={styles.row}>
                                <Text style={styles.totalOrder}>
                                    total redeemed orders
                                </Text>
                                <Text style={styles.totalOrderReedem}>
                                    {reedemData?.totalOrdersReedemed}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <ReedemButton
                                    text='Enter Code'
                                    onPress={codeModalHandler}
                                />
                                <ReedemButton
                                    text='Scan Code'
                                    onPress={scanCodeHandler}
                                />
                            </View>
                        </View>
                        <FlatList
                            data={reedemData?.data}
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
                                <Text style={styles.empty}>
                                    No Redeems made
                                </Text>
                            }
                        />
                    </>
                ) : null}
            </SafeAreaView>
        </>
    );
};

export default Appointments;
