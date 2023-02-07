import { ProgressHeader } from '@constants/Mappers';
import styles from '@styles/common/ProgressBar';
import ActiveProgress from '@svg/ActiveProgress';
import InactiveProgress from '@svg/InactiveProgress';
import React from 'react';
import { Text, View } from 'react-native';

const ProgressBar = (props: { activeIndex: number }) => {
    return (
        <View style={styles.container}>
            {Array.from(new Array(3), (_, index) => (
                <View style={styles.row} key={`progress_${index}`}>
                    {index <= props.activeIndex ? (
                        <>
                            <ActiveProgress />
                            <Text style={styles.txt}>
                                {ProgressHeader.get(index)}
                            </Text>
                        </>
                    ) : (
                        <>
                            <InactiveProgress />
                            <Text style={styles.inactiveTxt}>
                                {ProgressHeader.get(index)}
                            </Text>
                        </>
                    )}
                </View>
            ))}
        </View>
    );
};

export default ProgressBar;
