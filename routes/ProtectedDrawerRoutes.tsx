import { SCREENS } from '@models/screens';
import DrawerScreens from '@models/screens/DrawerScreens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SalesAndEarnings from '@screens/SalesAndEarnings';

const Drawer = createDrawerNavigator<DrawerScreens>();

function ProtectedDrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name={SCREENS.SALES_AND_EARNINGS}
                component={SalesAndEarnings}
            />
        </Drawer.Navigator>
    );
}

export default ProtectedDrawerRoutes;
