import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { credentialsActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/Navigators/SideDrawer';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const DrawerHeader = (props: DrawerContentComponentProps) => {
    const credentials = useSelector(
        (state: StoreModel) => state.credentialReducer
    );

    const dispatch = useDispatch();

    const logoutHandler = async () => {
        await SecureStore.deleteItemAsync('details');
        dispatch(credentialsActions.removeCredentials());
    };

    return (
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
            <DrawerItemList {...props} />
            <DrawerItem
                label='Logout'
                onPress={logoutHandler}
                labelStyle={styles.label}
            />
        </DrawerContentScrollView>
    );
};

export default DrawerHeader;
