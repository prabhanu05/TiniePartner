import Head from '@common/Head';
import HeadButton from '@common/HeadButton';
import styles from '@styles/pages/PhotoGallery';
import Bin from '@svg/Bin';
import Cross from '@svg/Cross';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PhotoGallery = () => {
    const [editMode, setEditMode] = useState(false);

    const [selected, setSelected] = useState([]);

    const editToggleHandler = () => {
        setEditMode((oldState) => !oldState);
    };

    const deleteHandler = () => {};

    return (
        <SafeAreaView style={styles.container}>
            <Head centered>
                <HeadButton text='Photo Album' isActive onPress={() => null} />
            </Head>
            <View style={editMode ? styles.row : [styles.row, styles.end]}>
                {editMode ? (
                    <View
                        style={[
                            styles.singleRow,
                            styles.spaceBetween,
                            styles.w100,
                        ]}
                    >
                        <View style={[styles.singleRow, styles.gap10]}>
                            <Text style={styles.txt}>
                                {selected.length} photos selected
                            </Text>
                            <Text style={styles.selectBtn}>select all</Text>
                        </View>
                        <View style={[styles.singleRow, styles.gap10]}>
                            <Pressable
                                style={styles.actionBtn}
                                onPress={editToggleHandler}
                            >
                                <Cross />
                                <Text style={styles.txt}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={styles.actionBtn}
                                onPress={deleteHandler}
                            >
                                <Bin />
                                <Text style={styles.txt}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                ) : (
                    <Text style={styles.selectBtn} onPress={editToggleHandler}>
                        select
                    </Text>
                )}
            </View>
        </SafeAreaView>
    );
};

export default PhotoGallery;
