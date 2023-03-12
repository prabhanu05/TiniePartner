import { SCREENS } from '@models/screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type BottomScreens = {
    [SCREENS.APPOINTMENTS]: undefined;
    [SCREENS.BARCODE]: undefined;
    [SCREENS.SERVICE_LIST]: undefined;
    [SCREENS.ACCOUNT_DETAILS]: undefined;
    [SCREENS.DRAWER_PROTECTED_ROUTES]: undefined;
};

export type AppointmentsScreenProps = NativeStackScreenProps<
    BottomScreens,
    SCREENS.APPOINTMENTS
>;

export default BottomScreens;
