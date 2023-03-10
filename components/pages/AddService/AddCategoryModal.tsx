import Popup from '@common/Popup';
import { COLORS } from '@constants/Colors';
import styles from '@styles/pages/AddService';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const AddCategoryModal = (props: { onClose: () => void }) => {
    const [text, setText] = useState('');

    return (
        <Popup>
            <Text style={styles.popupHeading}>Enter Category name</Text>
            <TextInput
                placeholder='example : Hair Care'
                value={text}
                onChangeText={setText}
                style={styles.popupTextfield}
                placeholderTextColor={COLORS.popupPlaceholder}
                maxLength={64}
            />
            <View style={styles.btnRow}>
                <Pressable style={styles.cancelBtn} onPress={props.onClose}>
                    <Text style={styles.cancelTxt}>Cancel</Text>
                </Pressable>

                <Pressable style={styles.createBtn}>
                    <Text style={styles.createTxt}>Create</Text>
                </Pressable>
            </View>
        </Popup>
    );
};

export default AddCategoryModal;
