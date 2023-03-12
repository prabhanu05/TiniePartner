import Modal from '@common/Modal';
import Option from '@common/Option';
import NoDataFound from '@components/AddService/NoDataFound';
import { CategoryModel } from '@models/api/CategoryListModel';
import styles from '@styles/common/LabelSelect';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const LabelSelect = (props: {
    placeholder: string;
    example?: string;
    value: string;
    label: string;
    data: CategoryModel[];
    selectHandler: (item: CategoryModel) => void;
    disablePress?: boolean;
    emptyDataMessage: string;
}) => {
    const [visible, setVisible] = useState(false);

    const toggleHandler = () => {
        setVisible((oldState) => !oldState);
    };

    const selectHandler = (item: CategoryModel) => {
        setVisible(false);
        props.selectHandler(item);
    };

    return (
        <>
            <Pressable
                style={styles.container}
                onPress={!!props?.disablePress ? null : toggleHandler}
            >
                {!!props?.value ? (
                    <Text style={styles.label}>{props.label}</Text>
                ) : null}
                {!!props?.value ? (
                    <Text style={styles.value}>{props?.value}</Text>
                ) : (
                    <Text style={styles.placeholder}>
                        {props.placeholder}{' '}
                        {!!props.example ? (
                            <Text style={styles.example}>
                                (example: {props.example})
                            </Text>
                        ) : (
                            ''
                        )}
                    </Text>
                )}
            </Pressable>
            {visible ? (
                <Modal onBackdropPress={toggleHandler}>
                    <View style={styles.overlay}>
                        <FlatList
                            data={props?.data}
                            keyExtractor={(item) =>
                                `category_${props.label}_${item?.id}`
                            }
                            ListEmptyComponent={
                                <NoDataFound
                                    message={props.emptyDataMessage}
                                    onClose={toggleHandler}
                                />
                            }
                            renderItem={({ item }) => (
                                <Option
                                    name={item?.name}
                                    value={item?.id}
                                    onPress={selectHandler.bind(this, item)}
                                />
                            )}
                        />
                    </View>
                </Modal>
            ) : null}
        </>
    );
};

export default LabelSelect;
