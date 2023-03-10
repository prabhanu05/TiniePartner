import { ReedemCode } from '@api/ReedemCode';
import Button from '@common/Button';
import Loader from '@common/Loader';
import Modal from '@common/Modal';
import { Keys } from '@constants/Keys';
import {
    ReedemCodeModal,
    ReedemCodePayload,
} from '@models/api/ReedemCodeModel';
import { StoreModel } from '@store/store';
import { default as modalStyles } from '@styles/pages/Appointments';
import styles from '@styles/pages/Barcode';
import {
    BarCodeScanner,
    BarCodeScannerResult,
    PermissionStatus,
} from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';

const Barcode = () => {
    const queryClient = useQueryClient();

    const [modal, setModal] = useState<ReedemCodeModal>({
        isVisible: false,
        message: '',
        reedemCode: '',
    });

    const { isLoading, mutateAsync } = useMutation(
        Keys.REEDEM_CODE,
        ReedemCode
    );

    const credentials = useSelector(
        (state: StoreModel) => state.credentialReducer
    );

    const [scanned, setScanned] = useState(false);

    const [permissionResponse, requestPermission] =
        BarCodeScanner.usePermissions();

    const closeModalHandler = () => {
        setModal({
            isVisible: false,
            message: '',
            reedemCode: '',
        });
    };

    const handleBarCodeScanned = async (data: BarCodeScannerResult) => {
        setScanned(true);

        const reedemCode = data.data;

        await mutateAsync({
            merchantId: credentials.merchantId,
            token: credentials.token,
            reedemCode,
        } as ReedemCodePayload)
            .then((data) => {
                if (data?.message === 'success') {
                    setModal({
                        isVisible: true,
                        message: 'Redeemed Successfully',
                        reedemCode,
                    });
                    queryClient.refetchQueries({
                        queryKey: Keys.GET_ALL_REEDEMS,
                        exact: true,
                    });
                    return;
                }
            })
            .catch(() =>
                setModal({
                    isVisible: true,
                    message: 'Invalid Reedem Code',
                    reedemCode: '',
                })
            );
    };

    const rescanHandler = () => {
        setScanned(false);
    };

    useEffect(() => {
        if (permissionResponse?.status !== PermissionStatus.GRANTED) {
            if (!!permissionResponse?.canAskAgain) {
                requestPermission();
            }
        }
    }, [permissionResponse?.status]);

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <Loader /> : null}
            {modal.isVisible ? (
                <Modal>
                    <View style={modalStyles.reedemCodeModalContainer}>
                        {!!modal.reedemCode ? (
                            <View style={modalStyles.reedemCodeRow}>
                                <Text style={modalStyles.reedemCodeTxt}>
                                    Reedem Code
                                </Text>
                                <Text style={modalStyles.reedemCode}>
                                    {modal.reedemCode}
                                </Text>
                            </View>
                        ) : null}
                        <Text style={modalStyles.reedemModalHeading}>
                            {modal.message}
                        </Text>
                        <Pressable
                            style={modalStyles.reedemModalBtn}
                            onPress={closeModalHandler}
                        >
                            <Text style={modalStyles.reedemModalTxt}>DONE</Text>
                        </Pressable>
                    </View>
                </Modal>
            ) : null}
            {permissionResponse?.status === PermissionStatus.GRANTED ? (
                <>
                    <BarCodeScanner
                        style={styles.barcodeContainer}
                        onBarCodeScanned={
                            scanned ? undefined : handleBarCodeScanned
                        }
                    />
                    {scanned ? (
                        <View style={styles.btn}>
                            <Button text='Re Scan' onPress={rescanHandler} />
                        </View>
                    ) : (
                        <Text style={styles.permissionTxt}>
                            Scanning QR Code
                        </Text>
                    )}
                </>
            ) : (
                <View style={styles.subContainer}>
                    <Text style={styles.permissionTxt}>
                        Please allow camera permissions to scan barcode
                    </Text>
                    <Button
                        text='Allow Permissions'
                        onPress={requestPermission}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

export default Barcode;
