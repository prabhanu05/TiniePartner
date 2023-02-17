import Modal from '@common/Modal';
import { appointmentsActions } from '@store/actions';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/Appointments';
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const ReedemCodeModal = (props: { onToggle: () => void }) => {
    const dispatch = useDispatch();
    const reedemCode = useSelector(
        (state: StoreModel) => state.appointmentReducer.reedemCode
    );

    const changeHandler = (text: string) => {
        dispatch(appointmentsActions.setReedemCode({ reedemCode: text }));
    };

    const confirmHandler = () => {
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
                        maxLength={16}
                    />
                </View>

                <View style={styles.codeRow}>
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
