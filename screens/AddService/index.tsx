import { CategorySubcategoryList } from '@api/CategorySubcategoryList';
import BlueLabelTextbox from '@common/BlueLabelTextbox';
import LabelSelect from '@common/LabelSelect';
import Loader from '@common/Loader';
import CustomColorBtn from '@components/AddService/CustomColorBtn';
import { COLORS } from '@constants/Colors';
import { isDecimal } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import { CategoryModel } from '@models/api/CategoryListModel';
import { AddServiceModel } from '@models/data/AddServiceModel';
import { AddServiceScreenProps } from '@models/screens/ProtectedStackScreens';
import styles from '@styles/pages/AddService';
import BackIcon from '@svg/BackIcon';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';

const AddService = ({ navigation }: AddServiceScreenProps) => {
    const { data, isLoading } = useQuery(
        Keys.GET_CATEGORY_SUBCATEGORY,
        CategorySubcategoryList
    );

    const [state, setState] = useState<AddServiceModel>({
        serviceCategory: {
            id: '',
            name: '',
        },
        serviceSubCategory: {
            id: '',
            name: '',
        },
        name: '',
        description: '',
        product1: '',
        product2: '',
        product3: '',
        product4: '',
        duration: '',
        cost: '',
        discountPrice: '',
    });

    const subcategoryData = useMemo(
        () =>
            !isLoading && Array.isArray(data)
                ? data.filter(
                      (item) => item.id === state.serviceCategory.id
                  )?.[0]?.subCategories
                : [],
        [isLoading, data, state.serviceCategory.id]
    );

    const textHandler = (uid: keyof AddServiceModel, text: string) => {
        setState((oldState) => ({
            ...oldState,
            [uid]: text,
        }));
    };

    const selectHandler = (uid: keyof AddServiceModel, item: CategoryModel) => {
        setState((oldState) => ({
            ...oldState,
            [uid]: item,
        }));
    };

    const categoryHandler = (
        uid: keyof AddServiceModel,
        item: CategoryModel
    ) => {
        setState((oldState) => ({
            ...oldState,
            [uid]: item,
            serviceSubCategory: {
                id: '',
                name: '',
            },
        }));
    };

    const appPrice = useMemo(
        () =>
            isDecimal(state.cost) && isDecimal(state.discountPrice)
                ? +state.cost - +state.discountPrice
                : 0,
        [state.cost, state.discountPrice]
    );

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <Loader /> : null}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
            >
                <View style={styles.headerRow}>
                    <Pressable
                        style={styles.backBtn}
                        onPress={navigation.goBack}
                    >
                        <BackIcon />
                    </Pressable>
                    <Text style={styles.screenName}>Enter Service Details</Text>
                </View>
                <LabelSelect
                    placeholder='Create Service Category'
                    example='Hair Care'
                    value={state.serviceCategory.name}
                    label='Service Category'
                    data={data!}
                    selectHandler={categoryHandler.bind(
                        this,
                        'serviceCategory'
                    )}
                />

                <Text style={styles.addToList}>or Add to existing list</Text>

                <LabelSelect
                    placeholder='Create Service Sub-Category'
                    example='Hair Cut'
                    value={state.serviceSubCategory.name}
                    label='Service Sub-Category'
                    data={subcategoryData!}
                    selectHandler={selectHandler.bind(
                        this,
                        'serviceSubCategory'
                    )}
                    disablePress={!!!state.serviceCategory.id}
                />
                <Text style={styles.addToList}>or Add to existing list</Text>

                <BlueLabelTextbox
                    label='Service Title'
                    placeholder='Enter Service Title'
                    value={state.name}
                    onChange={textHandler.bind(this, 'name')}
                />

                <BlueLabelTextbox
                    label='Service Description'
                    placeholder='Enter Service Description'
                    value={state.description}
                    onChange={textHandler.bind(this, 'description')}
                    maxLength={170}
                    isTextArea
                />

                <View style={styles.productRow}>
                    <BlueLabelTextbox
                        label='Products Used/Other details'
                        placeholder='Products Used/Other details'
                        value={state.product1}
                        onChange={textHandler.bind(this, 'product1')}
                    />
                    <BlueLabelTextbox
                        label='Products Used/Other details'
                        placeholder='Products Used/Other details'
                        value={state.product2}
                        onChange={textHandler.bind(this, 'product2')}
                    />
                </View>

                <View style={styles.productRow}>
                    <BlueLabelTextbox
                        label='Products Used/Other details'
                        placeholder='Products Used/Other details'
                        value={state.product3}
                        onChange={textHandler.bind(this, 'product3')}
                    />
                    <BlueLabelTextbox
                        label='Products Used/Other details'
                        placeholder='Products Used/Other details'
                        value={state.product4}
                        onChange={textHandler.bind(this, 'product4')}
                    />
                </View>

                <BlueLabelTextbox
                    label='Service duration (mins)'
                    placeholder='Enter Service duration in minutes'
                    value={state.duration}
                    onChange={textHandler.bind(this, 'duration')}
                    isNumeric
                />

                <Text style={styles.imageText}>select image</Text>

                <BlueLabelTextbox
                    label='Service Price INR (Menu Price)'
                    placeholder='Enter Service Price INR (Menu Price)'
                    value={state.cost}
                    onChange={textHandler.bind(this, 'cost')}
                    maxLength={8}
                    highlightText
                    isNumeric
                />

                <BlueLabelTextbox
                    label='Discount amount INR'
                    placeholder='Discount amount INR (if any)'
                    value={state.discountPrice}
                    onChange={textHandler.bind(this, 'discountPrice')}
                    maxLength={8}
                    highlightText
                    isNumeric
                />

                <View style={styles.appPrice}>
                    <Text style={styles.appPriceTxt}>App Price INR</Text>
                    <Text style={styles.appPriceNum}>{appPrice}</Text>
                </View>

                <View style={styles.bottomRow}>
                    <CustomColorBtn
                        backgroundColor={COLORS.white}
                        text='CANCEL'
                        onPress={navigation.goBack}
                    />
                    <CustomColorBtn
                        backgroundColor={COLORS.purple}
                        text='CREATE SERVICE'
                        onPress={() => {}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddService;
