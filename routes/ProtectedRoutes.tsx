import { SCREENS } from '@models/screens';
import { StackScreens } from '@models/screens/StackScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Appointments from '@screens/Appointments';

const Stack = createNativeStackNavigator<StackScreens>();

function ProtectedRoutes() {
    return (
        <Stack.Navigator
            initialRouteName={SCREENS.APPOINTMENTS}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name={SCREENS.APPOINTMENTS}
                component={Appointments}
            />
        </Stack.Navigator>
    );
}

export default ProtectedRoutes;
