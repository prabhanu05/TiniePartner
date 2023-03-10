import { SCREENS } from '@models/screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type BottomScreens = {
    [SCREENS.APPOINTMENTS]: undefined;
    [SCREENS.BARCODE]: undefined;
    [SCREENS.SERVICE_LIST]: undefined;
};

export type AppointmentsScreenProps = NativeStackScreenProps<
    BottomScreens,
    SCREENS.APPOINTMENTS
>;

export default BottomScreens;
