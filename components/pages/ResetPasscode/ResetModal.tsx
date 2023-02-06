import GlowButton from '@common/GlowButton';
import Modal from '@common/Modal';
import styles from '@styles/pages/ResetPasscode';
import { Text, View } from 'react-native';

const ResetModal = (props: { onSave: () => void }) => {
    return (
        <Modal>
            <View style={styles.modalHolder}>
                <Text style={styles.modalTxt}>
                    passcode reset successfully!
                </Text>
                <GlowButton text='DONE' onPress={props.onSave} />
            </View>
        </Modal>
    );
};

export default ResetModal;
