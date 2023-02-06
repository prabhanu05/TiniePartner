import { SCREENS } from '@models/screens';
import { StackScreens } from '@models/screens/StackScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '@screens/Welcome';

const Stack = createNativeStackNavigator<StackScreens>();

function OpenRoutes() {
    return (
        <Stack.Navigator
            initialRouteName={SCREENS.WELCOME}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={SCREENS.WELCOME} component={Welcome} />
        </Stack.Navigator>
    );
}

export default OpenRoutes;
