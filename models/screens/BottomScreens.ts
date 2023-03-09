import { SCREENS } from '@models/screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type BottomScreens = {
    [SCREENS.APPOINTMENTS]: undefined;
    [SCREENS.BARCODE]: undefined;
    [SCREENS.SERVICE_LIST]: undefined;
    [SCREENS.ADD_SERVICE]: undefined;
};

export type AppointmentsScreenProps = NativeStackScreenProps<
    BottomScreens,
    SCREENS.APPOINTMENTS
>;

export type AddServiceScreenProps = NativeStackScreenProps<
    BottomScreens,
    SCREENS.ADD_SERVICE
>;

export default BottomScreens;
