import { CategorySubcategoryList } from '@api/CategorySubcategoryList';
import { Keys } from '@constants/Keys';
import { AddServiceScreenProps } from '@models/screens/BottomScreens';
import styles from '@styles/pages/AddService';
import BackIcon from '@svg/BackIcon';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';

const AddService = ({ navigation }: AddServiceScreenProps) => {
    const { data, isLoading } = useQuery(
        Keys.GET_CATEGORY_SUBCATEGORY,
        CategorySubcategoryList
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerRow}>
                <Pressable style={styles.backBtn} onPress={navigation.goBack}>
                    <BackIcon />
                </Pressable>
                <Text style={styles.screenName}>Enter Service Details</Text>
            </View>

            <ScrollView></ScrollView>
        </SafeAreaView>
    );
};

export default AddService;
