import Option from '@common/Option';
import NoDataFound from '@components/AddService/NoDataFound';
import { COLORS } from '@constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { CategoryModel } from '@models/api/CategoryListModel';
import styles from '@styles/common/Select';
import React, { useState } from 'react';
import { FlatList, Modal, Pressable, Text, View } from 'react-native';

const Select = (props: {
    value: string;
    title: string;
    label: string;
    data: CategoryModel[];
    changeHandler: (text: CategoryModel) => void;
}) => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleHandler = () => {
        setVisible((oldState) => !oldState);
    };

    const changeHandler = (item: CategoryModel) => {
        props.changeHandler(item);
        setVisible(false);
    };

    return (
        <>
            <View style={styles.mainHolder}>
                <Pressable style={styles.dateHolder} onPress={toggleHandler}>
                    {!!props.value ? (
                        <Text style={styles.label}>{props.title} </Text>
                    ) : (
                        <Text style={styles.txt}>{props.label}</Text>
                    )}

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
                            ListEmptyComponent={
                                <NoDataFound
                                    message={
                                        'No categories found\nPlease try again later!'
                                    }
                                    onClose={toggleHandler}
                                />
                            }
                        />
                    </View>
                </Pressable>
            </Modal>
        </>
    );
};

export default Select;
