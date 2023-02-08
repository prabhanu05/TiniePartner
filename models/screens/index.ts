export enum SCREENS {
    WELCOME = 'Welcome',
    LOGIN = 'Login',
    REGISTER = 'Register',
    FORGOT_PASSCODE = 'ForgotCode',
    RESET_PASSCODE = 'ResetPasscode',
    FURTHER_ASSISTANCE = 'FurtherAssistance',
    SET_PASSCODE = 'SetPasscode',
    PRIVACY_POLICY = 'PrivacyPolicy',
    TnC = 'TnC',
}

export type NavigationProp = {
    navigate: (screen: SCREENS) => void;
};
