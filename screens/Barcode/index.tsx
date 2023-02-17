import Button from '@common/Button';
import styles from '@styles/pages/Barcode';
import {
    BarCodeScanner,
    BarCodeScannerResult,
    PermissionStatus,
} from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Barcode = () => {
    const [scanned, setScanned] = useState(false);

    const [permissionResponse, requestPermission] =
        BarCodeScanner.usePermissions();

    const handleBarCodeScanned = (data: BarCodeScannerResult) => {
        setScanned(true);

        alert(`Barcode Scanned, value = ${data.data}`);
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
