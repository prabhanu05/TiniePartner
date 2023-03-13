import DrawerHeader from '@components/DrawerHeader';
import { COLORS } from '@constants/Colors';
import { SCREENS } from '@models/screens';
import DrawerScreens from '@models/screens/DrawerScreens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProtectedTabRoutes from '@routes/ProtectedTabRoutes';
import SalesAndEarnings from '@screens/SalesAndEarnings';
import styles from '@styles/Navigators/SideDrawer';

const Drawer = createDrawerNavigator<DrawerScreens>();

function ProtectedDrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: styles.label,
                drawerStyle: styles.mainContainer,
                drawerActiveBackgroundColor: COLORS.transparent,
                drawerActiveTintColor: COLORS.transparent,
            }}
            initialRouteName={SCREENS.BOTTOM_TAB_PROTECTED_ROUTES}
            drawerContent={(props) => <DrawerHeader {...props} />}
        >
            <Drawer.Screen
                name={SCREENS.SALES_AND_EARNINGS}
                component={SalesAndEarnings}
                options={{
                    drawerLabel: 'Sales & Earnings',
                }}
            />
            <Drawer.Screen
                name={SCREENS.BOTTOM_TAB_PROTECTED_ROUTES}
                component={ProtectedTabRoutes}
                options={{
                    drawerLabel: 'Appointments & Redeems',
                }}
            />
        </Drawer.Navigator>
    );
}

export default ProtectedDrawerRoutes;
