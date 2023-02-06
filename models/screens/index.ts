export enum SCREENS {
    WELCOME = 'Welcome',
    LOGIN = 'Login',
    REGISTER = 'Register',
}

export type NavigationProp = {
    navigate: (screen: SCREENS) => void;
};
