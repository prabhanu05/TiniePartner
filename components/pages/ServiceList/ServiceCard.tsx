import Radio from '@common/Radio';
import styles from '@styles/pages/ServiceList';
import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const ServiceCard = () => {
    const [active, setActive] = useState(false);

    const toggleHandler = () => {
        setActive((oldState) => !oldState);
    };
    return (
        <View style={styles.card}>
            <View style={styles.cardUpperHolder}>
                <View style={styles.cardUpperRow}>
                    <View style={styles.tags}>
                        <Text style={styles.tag}>HAIR CARE</Text>
                        <Text style={styles.tag}>HAIR CUT</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.serviceName}>WOMEN'S HAIRCUT</Text>
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
                    <Radio isActive={active} toggleHandler={toggleHandler} />
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
    );
};

export default ServiceCard;
