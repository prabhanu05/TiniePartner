export enum SCREENS {
    WELCOME = 'Welcome',
    LOGIN = 'Login',
    REGISTER = 'Register',
    FORGOT_PASSCODE = 'ForgotCode',
}

export type NavigationProp = {
    navigate: (screen: SCREENS) => void;
};
