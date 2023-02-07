import styles from '@styles/common/Checkbox';
import React from 'react';
import { View } from 'react-native';

const Checkbox = (props: { isSelected: boolean }) => {
    return (
        <View style={styles.container}>
            {props.isSelected ? <View style={styles.active}></View> : null}
        </View>
    );
};

export default Checkbox;
