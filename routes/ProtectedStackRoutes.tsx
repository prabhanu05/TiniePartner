import { SCREENS } from '@models/screens';
import { ProtectedStackScreens } from '@models/screens/ProtectedStackScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProtectedTabRoutes from '@routes/ProtectedTabRoutes';
import AddService from '@screens/AddService';

const Stack = createNativeStackNavigator<ProtectedStackScreens>();

function ProtectedStackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName={SCREENS.BOTTOM_TAB_PROTECTED_ROUTES}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name={SCREENS.BOTTOM_TAB_PROTECTED_ROUTES}
                component={ProtectedTabRoutes}
            />
            <Stack.Screen name={SCREENS.ADD_SERVICE} component={AddService} />
        </Stack.Navigator>
    );
}

export default ProtectedStackRoutes;
