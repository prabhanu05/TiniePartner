import GlowButton from '@common/GlowButton';
import Modal from '@common/Modal';
import styles from '@styles/pages/ResetPasscode';
import { Text, View } from 'react-native';

const ResetModal = (props: { onSave: () => void; msg: string }) => {
    return (
        <Modal>
            <View style={styles.modalHolder}>
                <Text style={styles.modalTxt}>{props.msg}</Text>
                <GlowButton text='DONE' onPress={props.onSave} />
            </View>
        </Modal>
    );
};

export default ResetModal;
