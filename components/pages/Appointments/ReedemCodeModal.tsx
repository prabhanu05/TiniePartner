import { ReedemCode } from '@api/ReedemCode';
import Modal from '@common/Modal';
import { isAlphaNumeric } from '@constants/Helpers';
import { Keys } from '@constants/Keys';
import { appointmentsActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/Appointments';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

const ReedemCodeModal = (props: { onToggle: () => void }) => {
    const { isLoading, mutateAsync } = useMutation(
        Keys.REEDEM_CODE,
        ReedemCode
    );

    const dispatch = useDispatch();
    const [error, setError] = useState(false);

    const reedemCode = useSelector(
        (state: StoreModel) => state.appointmentReducer.reedemCode
    );

    const changeHandler = (text: string) => {
        if (error) {
            setError(false);
        }
        dispatch(appointmentsActions.setReedemCode({ reedemCode: text }));
    };

    const confirmHandler = () => {
        if (reedemCode.length < 8 || isAlphaNumeric(reedemCode) === false) {
            setError(true);
            return;
        }
        // Handle success
        props.onToggle();
        dispatch(appointmentsActions.clearReedemCode());
    };

    return (
        <Modal>
            <View style={styles.reedemCodeModalContainer}>
                <View style={styles.inputHolder}>
                    <Text style={styles.label}>enter reedem ID</Text>
                    <TextInput
                        style={styles.input}
                        value={reedemCode}
                        onChangeText={changeHandler}
                        maxLength={8}
                    />
                    {error ? (
                        <Text style={styles.error}>Invalid Reedem ID</Text>
                    ) : null}
                </View>

                <View style={[styles.codeRow, styles.mt25]}>
                    <Pressable style={styles.btn} onPress={props.onToggle}>
                        <Text style={styles.btnTxt}>CANCEL</Text>
                    </Pressable>
                    <Pressable style={styles.btn} onPress={confirmHandler}>
                        <Text style={styles.btnTxt}>CONFIRM</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default ReedemCodeModal;
