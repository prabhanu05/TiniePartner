import { CategorySubcategoryList } from '@api/CategorySubcategoryList';
import { CreateService } from '@api/CreateService';
import BlueLabelTextbox from '@common/BlueLabelTextbox';
import ErrorModal from '@common/ErrorModal';
import LabelSelect from '@common/LabelSelect';
import Loader from '@common/Loader';
import AddCategoryModal from '@components/AddService/AddCategoryModal';
import AddSubcategoryModal from '@components/AddService/AddSubcategoryModal';
import CustomColorBtn from '@components/AddService/CustomColorBtn';
import { COLORS } from '@constants/Colors';
import { checkEmpty, isDecimal, isNumeric } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import { CategoryModel } from '@models/api/CategoryListModel';
import {
    AddServiceModalData,
    AddServiceModel,
    AddServicePayloadModel,
} from '@models/data/AddServiceModel';
import { AddServiceScreenProps } from '@models/screens/ProtectedStackScreens';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/AddService';
import BackIcon from '@svg/BackIcon';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const AddService = ({ navigation }: AddServiceScreenProps) => {
    const credentials = useSelector(
        (state: StoreModel) => state.credentialReducer
    );

    const { data, isLoading: catSubcatLoading } = useQuery(
        Keys.GET_CATEGORY_SUBCATEGORY,
        CategorySubcategoryList.bind(this, credentials.token!)
    );

    const { isLoading: serviceLoading, mutateAsync } = useMutation(
        Keys.ADD_SERVICE,
        CreateService
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

    const [modal, setModal] = useState<AddServiceModalData>({
        error: {
            isVisible: false,
            message: '',
        },
        addCategory: {
            isVisible: false,
            message: '',
        },
        addSubcategory: {
            isVisible: false,
            message: '',
        },
    });

    const subcategoryData = useMemo(
        () =>
            !catSubcatLoading && Array.isArray(data)
                ? data.filter(
                      (item) => item.id === state.serviceCategory.id
                  )?.[0]?.subCategories
                : [],
        [catSubcatLoading, data, state.serviceCategory.id]
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

    const closeModalHandler = (uid: keyof AddServiceModalData) => {
        setModal((oldState) => ({
            ...oldState,
            [uid]: {
                isVisible: false,
                message: '',
            },
        }));
    };

    const openModalHandler = (uid: keyof AddServiceModalData) => {
        setModal((oldState) => ({
            ...oldState,
            [uid]: {
                isVisible: true,
                message: '',
            },
        }));
    };

    const doneHandler = async () => {
        const message = checkEmpty([
            { key: 'Category', value: state.serviceCategory.id },
            {
                key: 'Sub-Category',
                value: state.serviceSubCategory.id,
            },
            {
                key: 'Title',
                value: state.name,
            },
            {
                key: 'Description',
                value: state.description,
            },
            {
                key: 'Products Used/Other details',
                value: `${state.product1}${state.product2}${state.product3}${state.product4}`,
            },
            {
                key: 'Duration',
                value: state.duration,
            },
            {
                key: 'Price',
                value: state.cost,
            },
            {
                key: 'Discount Amount',
                value: state.discountPrice,
            },
        ]);

        if (!!message) {
            setModal((oldState) => ({
                ...oldState,
                error: {
                    isVisible: true,
                    message,
                },
            }));
            return;
        }

        if (
            !isNumeric(state.duration) ||
            !isDecimal(state.cost) ||
            !isDecimal(state.discountPrice)
        ) {
            setModal((oldState) => ({
                ...oldState,
                error: {
                    isVisible: true,
                    message: 'Please enter valid numeric values',
                },
            }));
            return;
        }

        if (+state.discountPrice > +state.cost) {
            setModal((oldState) => ({
                ...oldState,
                error: {
                    isVisible: true,
                    message:
                        'Discount price cannot be greater than Service Price',
                },
            }));
            return;
        }

        const itemsUsed = [];

        if (state.product1.trim() !== '') {
            itemsUsed.push(state.product1);
        }

        if (state.product2.trim() !== '') {
            itemsUsed.push(state.product2);
        }

        if (state.product3.trim() !== '') {
            itemsUsed.push(state.product3);
        }

        if (state.product4.trim() !== '') {
            itemsUsed.push(state.product4);
        }

        const payloadData: AddServicePayloadModel = {
            businessId: credentials.businessId!,
            cost: state.cost,
            description: state.description,
            discountPrice: state.discountPrice,
            duration: state.duration,
            itemsUsed,
            name: state.name,
            serviceCategoryId: state.serviceCategory.id,
            serviceSubCategoryId: state.serviceSubCategory.id,
            token: credentials.token!,
        };

        await mutateAsync(payloadData)
            .then((resp) => console.log(resp))
            .catch((err) => console.log(err));
    };

    const appPrice = useMemo(
        () =>
            isDecimal(state.cost) && isDecimal(state.discountPrice)
                ? +state.cost - +state.discountPrice
                : 0,
        [state.cost, state.discountPrice]
    );

    return (
        <>
            {modal.error.isVisible ? (
                <ErrorModal
                    msg={modal.error.message}
                    onClose={closeModalHandler.bind(this, 'error')}
                />
            ) : null}
            {modal.addCategory.isVisible ? (
                <AddCategoryModal
                    onClose={closeModalHandler.bind(this, 'addCategory')}
                />
            ) : null}
            {modal.addSubcategory.isVisible ? (
                <AddSubcategoryModal
                    onClose={closeModalHandler.bind(this, 'addSubcategory')}
                    categoryId={state.serviceCategory.id}
                />
            ) : null}
            <SafeAreaView style={styles.container}>
                {catSubcatLoading || serviceLoading ? <Loader /> : null}

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
                        <Text style={styles.screenName}>
                            Enter Service Details
                        </Text>
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
                        emptyDataMessage={
                            'No Service Categories Found.\nPlease add a new service category.'
                        }
                    />

                    <Text
                        style={styles.addToList}
                        onPress={openModalHandler.bind(this, 'addCategory')}
                    >
                        or Add to existing list
                    </Text>

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
                        emptyDataMessage={
                            'No Service Subcategories Found.\nPlease add a new service subcategory.'
                        }
                    />
                    <Text
                        style={styles.addToList}
                        onPress={openModalHandler.bind(this, 'addSubcategory')}
                    >
                        or Add to existing list
                    </Text>

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
                            onPress={doneHandler}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default AddService;
