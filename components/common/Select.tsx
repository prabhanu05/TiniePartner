import Option from '@common/Option';
import { COLORS } from '@constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { CategoryModel } from '@models/api/CategoryListModel';
import styles from '@styles/common/Select';
import React, { useState } from 'react';
import { FlatList, Modal, Pressable, Text, View } from 'react-native';

const Select = (props: {
    id: any;
    value: string;
    title: string;
    label: string;
    data: CategoryModel[];
    changeHandler: (uid: any, text: string | Date | CategoryModel) => void;
}) => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleHandler = () => {
        setVisible((oldState) => !oldState);
    };

    const changeHandler = (item: CategoryModel) => {
        props.changeHandler(props.id, item);
        setVisible(false);
    };

    return (
        <>
            <View style={styles.mainHolder}>
                <Pressable style={styles.dateHolder} onPress={toggleHandler}>
                    {!!props.value ? (
                        <Text style={styles.label}>{props.title} </Text>
                    ) : null}
                    <Text style={styles.txt}>{props.label}</Text>
                    <View style={styles.input}>
                        <Text style={styles.dateTxt}>{props.value}</Text>
                        <AntDesign
                            name='caretdown'
                            size={20}
                            color={COLORS.black}
                        />
                    </View>
                </Pressable>
            </View>
            <Modal visible={visible} transparent statusBarTranslucent>
                <Pressable
                    onPress={toggleHandler}
                    style={styles.containerModal}
                >
                    <View style={styles.overlay}>
                        <FlatList
                            data={props.data}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => (
                                <Option
                                    name={item.name}
                                    value={item.id}
                                    onPress={changeHandler.bind(this, item)}
                                />
                            )}
                        />
                    </View>
                </Pressable>
            </Modal>
        </>
    );
};

export default Select;
