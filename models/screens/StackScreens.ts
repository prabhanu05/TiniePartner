import { SCREENS } from '@models/screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackScreens = {
    [SCREENS.WELCOME]: undefined;
    [SCREENS.LOGIN]: undefined;
    [SCREENS.REGISTER]: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.WELCOME
>;

export { StackScreens };
