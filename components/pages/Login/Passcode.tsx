import GlowButton from '@common/GlowButton';
import Modal from '@common/Modal';
import PasscodeInput from '@components/Login/PasscodeInput';
import { isNumeric } from '@constants/Helpers';
import { NavigationProp, SCREENS } from '@models/screens';
import { useNavigation } from '@react-navigation/native';
import styles from '@styles/pages/Login';
import React, { useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const Passcode = (props: { toggleHandler: () => void }) => {
    const [data, setData] = useState(['', '', '', '']);

    const { navigate } = useNavigation<NavigationProp>();

    const firstTextInputRef = useRef<TextInput>(null);
    const secondTextInputRef = useRef<TextInput>(null);
    const thirdTextInputRef = useRef<TextInput>(null);
    const fourthTextInputRef = useRef<TextInput>(null);

    const refArray = [
        firstTextInputRef,
        secondTextInputRef,
        thirdTextInputRef,
        fourthTextInputRef,
    ];

    const changeHandler = (index: number, text: string) => {
        if (text !== '' && isNumeric(text) === false) return;

        const clonedData = [...data];
        clonedData[index] = text;
        setData(clonedData);

        if (text === '') {
            if (index === 3) {
                thirdTextInputRef.current?.focus();
            } else if (index === 2) {
                secondTextInputRef.current?.focus();
            } else if (index === 1) {
                firstTextInputRef.current?.focus();
            }
        } else {
            if (index === 0) {
                secondTextInputRef.current?.focus();
            } else if (index === 1) {
                thirdTextInputRef.current?.focus();
            } else if (index === 2) {
                fourthTextInputRef.current?.focus();
            }
        }
    };

    const navigateHandler = () => {
        props.toggleHandler();
        navigate(SCREENS.FORGOT_PASSCODE);
    };

    return (
        <Modal>
            <View style={styles.passcodeHolder}>
                <Text style={styles.passHeading}>ENTER PASSCODE</Text>
                <View style={styles.passcodeRow}>
                    {data.map((val, index) => (
                        <PasscodeInput
                            key={`passcode_${index}`}
                            value={val}
                            onChangeText={changeHandler.bind(this, index)}
                            reference={refArray[index]}
                        />
                    ))}
                </View>
                <Text style={styles.forgotPass} onPress={navigateHandler}>
                    Forgot passcode - <Text style={styles.reset}>reset</Text>
                </Text>
                <View style={styles.row}>
                    <Pressable style={styles.col} onPress={props.toggleHandler}>
                        <Text style={styles.cancel}>Cancel</Text>
                    </Pressable>
                    <View style={styles.col}>
                        <GlowButton text='Enter' onPress={() => null} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default Passcode;
