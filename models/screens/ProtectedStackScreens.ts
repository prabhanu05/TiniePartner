import { SCREENS } from '@models/screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ProtectedStackScreens = {
    [SCREENS.BOTTOM_TAB_PROTECTED_ROUTES]: undefined;
    [SCREENS.ADD_SERVICE]: undefined;
};

export type AddServiceScreenProps = NativeStackScreenProps<
    ProtectedStackScreens,
    SCREENS.ADD_SERVICE
>;

export { ProtectedStackScreens };
