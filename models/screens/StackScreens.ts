import { SCREENS } from '@models/screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackScreens = {
    [SCREENS.WELCOME]: undefined;
    [SCREENS.LOGIN]: undefined;
    [SCREENS.REGISTER]: undefined;
    [SCREENS.FORGOT_PASSCODE]: undefined;
    [SCREENS.RESET_PASSCODE]: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.WELCOME
>;

export type ForgotPasscodeScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.FORGOT_PASSCODE
>;

export type ResetPasscodeScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.RESET_PASSCODE
>;

export { StackScreens };
