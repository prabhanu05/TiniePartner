import { SCREENS } from '@models/screens';
import { StackScreens } from '@models/screens/StackScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPasscode from '@screens/ForgotPasscode';
import FurtherAssistance from '@screens/FurtherAssistance';
import HostBusiness from '@screens/HostBusiness';
import Login from '@screens/Login';
import PrivacyPolicy from '@screens/PrivacyPolicy';
import Register from '@screens/Register';
import ResetPasscode from '@screens/ResetPasscode';
import SetPasscode from '@screens/SetPasscode';
import TermsAndConditions from '@screens/TermsAndConditions';
import Welcome from '@screens/Welcome';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator<StackScreens>();

function OpenRoutes() {
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);

    return (
        <Stack.Navigator
            initialRouteName={SCREENS.WELCOME}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={SCREENS.WELCOME} component={Welcome} />
            <Stack.Screen name={SCREENS.LOGIN} component={Login} />
            <Stack.Screen name={SCREENS.REGISTER} component={Register} />
            <Stack.Screen
                name={SCREENS.FORGOT_PASSCODE}
                component={ForgotPasscode}
            />
            <Stack.Screen
                name={SCREENS.RESET_PASSCODE}
                component={ResetPasscode}
            />
            <Stack.Screen
                name={SCREENS.FURTHER_ASSISTANCE}
                component={FurtherAssistance}
            />
            <Stack.Screen name={SCREENS.SET_PASSCODE} component={SetPasscode} />
            <Stack.Screen
                name={SCREENS.PRIVACY_POLICY}
                component={PrivacyPolicy}
            />
            <Stack.Screen name={SCREENS.TnC} component={TermsAndConditions} />
            <Stack.Screen
                name={SCREENS.HOST_BUSINESS}
                component={HostBusiness}
            />
        </Stack.Navigator>
    );
}

export default OpenRoutes;
