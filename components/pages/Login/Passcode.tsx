import GlowButton from '@common/GlowButton';
import Modal from '@common/Modal';
import PasscodeInput from '@components/Login/PasscodeInput';
import styles from '@styles/pages/Login';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const Passcode = (props: { toggleHandler: () => void }) => {
    const [data, setData] = useState(['', '', '', '']);

    const changeHandler = (index: number, text: string) => {
        const clonedData = [...data];
        clonedData[index] = text;
        setData(clonedData);
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
                        />
                    ))}
                </View>
                <Text style={styles.forgotPass}>
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
