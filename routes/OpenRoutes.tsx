import { SCREENS } from '@models/screens';
import { StackScreens } from '@models/screens/StackScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPasscode from '@screens/ForgotPasscode';
import FurtherAssistance from '@screens/FurtherAssistance';
import Login from '@screens/Login';
import Register from '@screens/Register';
import ResetPasscode from '@screens/ResetPasscode';
import Welcome from '@screens/Welcome';

const Stack = createNativeStackNavigator<StackScreens>();

function OpenRoutes() {
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
        </Stack.Navigator>
    );
}

export default OpenRoutes;
