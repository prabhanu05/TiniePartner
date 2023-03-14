import YesNoModal from '@common/YesNoModal';
import { NavigationProp, SCREENS } from '@models/screens';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { credentialsActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/Navigators/SideDrawer';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const DrawerHeader = (props: DrawerContentComponentProps) => {
    const credentials = useSelector(
        (state: StoreModel) => state.credentialReducer
    );

    const navigation = useNavigation<NavigationProp>();

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const toggleHandler = () => {
        setShow((oldState) => !oldState);
    };

    const navigateHandler = (screen: SCREENS) => {
        navigation.navigate(screen);
    };

    const logoutHandler = async () => {
        await SecureStore.deleteItemAsync('details');
        dispatch(credentialsActions.removeCredentials());
    };

    return (
        <>
            {show ? (
                <YesNoModal
                    message='Do you really want to logout?'
                    onConfirm={logoutHandler}
                    onCancel={toggleHandler}
                />
            ) : null}
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={styles.container}
            >
                <View style={styles.topBar}>
                    <View>
                        <Text style={styles.topBarText}>
                            {credentials?.businessName}
                        </Text>
                    </View>
                    <Text style={styles.topBarText}>{credentials?.rating}</Text>
                </View>
                <DrawerItem
                    label='Account Details'
                    onPress={navigateHandler.bind(
                        this,
                        SCREENS.ACCOUNT_DETAILS
                    )}
                    labelStyle={styles.label}
                />

                <DrawerItem
                    label='Services list'
                    onPress={navigateHandler.bind(this, SCREENS.SERVICE_LIST)}
                    labelStyle={styles.label}
                />

                <DrawerItem
                    label='Photo Gallery'
                    onPress={navigateHandler.bind(this, SCREENS.PHOTO_GALLERY)}
                    labelStyle={styles.label}
                />

                <DrawerItem
                    label='Appointments & Redeems'
                    onPress={navigateHandler.bind(this, SCREENS.APPOINTMENTS)}
                    labelStyle={styles.label}
                />

                <DrawerItem
                    label='Sales & Earnings'
                    onPress={navigateHandler.bind(
                        this,
                        SCREENS.SALES_AND_EARNINGS
                    )}
                    labelStyle={styles.label}
                />

                <DrawerItem
                    label='Logout'
                    onPress={toggleHandler}
                    labelStyle={styles.label}
                />
            </DrawerContentScrollView>
        </>
    );
};

export default DrawerHeader;
