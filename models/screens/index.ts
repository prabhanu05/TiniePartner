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
    HOST_BUSINESS = 'HostBusiness',
    APPOINTMENTS = 'Appointments',
    BARCODE = 'Barcode',
    SERVICE_LIST = 'ServiceList',
    ADD_SERVICE = 'AddService',
    BOTTOM_TAB_PROTECTED_ROUTES = 'BottomTabProtectedRoutes',
    DRAWER_PROTECTED_ROUTES = 'DrawerProtectedRoutes',
    SALES_AND_EARNINGS = 'SalesAndEarnings',
    ACCOUNT_DETAILS = 'AccountDetails',
    PHOTO_GALLERY = 'PhotoGallery',
}

export type NavigationProp = {
    navigate: (screen: SCREENS) => void;
    goBack: () => void;
};
