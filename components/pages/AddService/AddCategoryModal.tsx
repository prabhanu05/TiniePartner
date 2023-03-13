import { CreateCategory } from '@api/CreateCategory';
import ConfirmModal from '@common/ConfirmModal';
import Popup from '@common/Popup';
import { COLORS } from '@constants/Colors';
import { Keys } from '@constants/Keys';
import { StoreModel } from '@store/store';
import styles from '@styles/pages/AddService';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';

const AddCategoryModal = (props: { onClose: () => void }) => {
    const queryClient = useQueryClient();

    const credentials = useSelector(
        (state: StoreModel) => state.credentialReducer
    );

    const { isLoading, mutateAsync } = useMutation(
        Keys.ADD_SERVICE_CATEGORY,
        CreateCategory
    );

    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const addCategoryHandler = async () => {
        if (text.trim().length < 2) {
            setError('Please enter valid category name');
            return;
        }

        if (error) {
            setError('');
        }

        await mutateAsync({
            id: credentials.businessId!,
            name: text,
            token: credentials.token!,
        })
            .then((data) => {
                if (data === true) {
                    queryClient.refetchQueries(Keys.SERVICE_CAT_SUBCAT);
                    setSuccess(true);
                }
            })
            .catch(() => {
                setError(
                    'Unable to create category this time. Please try again later!'
                );
            });
    };

    return (
        <Popup>
            {success ? (
                <ConfirmModal
                    message='Services Created'
                    helperText='(It might take a moment to show)'
                    onConfirm={props.onClose}
                />
            ) : (
                <>
                    <Text style={styles.popupHeading}>Enter Category name</Text>
                    <TextInput
                        placeholder='example : Hair Care'
                        value={text}
                        onChangeText={setText}
                        style={styles.popupTextfield}
                        placeholderTextColor={COLORS.popupPlaceholder}
                        maxLength={64}
                    />
                    <Text style={styles.error}>{!!error ? error : ''}</Text>
                    <View style={styles.btnRow}>
                        <Pressable
                            style={styles.cancelBtn}
                            onPress={isLoading ? null : props.onClose}
                        >
                            <Text style={styles.cancelTxt}>Cancel</Text>
                        </Pressable>

                        <Pressable
                            style={styles.createBtn}
                            onPress={isLoading ? null : addCategoryHandler}
                        >
                            {isLoading ? (
                                <ActivityIndicator color={COLORS.white} />
                            ) : (
                                <Text style={styles.createTxt}>Create</Text>
                            )}
                        </Pressable>
                    </View>
                </>
            )}
        </Popup>
    );
};

export default AddCategoryModal;
