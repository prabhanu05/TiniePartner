import { SCREENS } from '@models/screens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackScreens = {
    [SCREENS.WELCOME]: undefined;
    [SCREENS.LOGIN]: undefined;
    [SCREENS.REGISTER]: undefined;
    [SCREENS.FORGOT_PASSCODE]: undefined;
    [SCREENS.RESET_PASSCODE]: {
        email: string;
        emailOtp: string;
        phoneOtp: string;
    };
    [SCREENS.FURTHER_ASSISTANCE]: undefined;
    [SCREENS.SET_PASSCODE]: undefined;
    [SCREENS.PRIVACY_POLICY]: undefined;
    [SCREENS.TnC]: undefined;
    [SCREENS.HOST_BUSINESS]: undefined;
    [SCREENS.APPOINTMENTS]: undefined;
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

export type LoginScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.LOGIN
>;

export type RegisterScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.REGISTER
>;

export type FurtherAssistanceScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.FURTHER_ASSISTANCE
>;

export type SetPasscodeScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.SET_PASSCODE
>;

export type PrivacyPolicyScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.PRIVACY_POLICY
>;

export type TnCScreenProps = NativeStackScreenProps<StackScreens, SCREENS.TnC>;

export type HostBusinessScreenProps = NativeStackScreenProps<
    StackScreens,
    SCREENS.HOST_BUSINESS
>;

export { StackScreens };
