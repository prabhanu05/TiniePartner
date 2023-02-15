import { COLORS } from '@constants/Colors';
import { SCREENS } from '@models/screens';
import BottomScreens from '@models/screens/BottomScreens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Appointments from '@screens/Appointments';
import styles from '@styles/Navigators/BottomTab';
import AppointmentsIcon from '@svg/AppointmentsIcon';

const Tab = createBottomTabNavigator<BottomScreens>();

function ProtectedRoutes() {
    return (
        <Tab.Navigator
            initialRouteName={SCREENS.APPOINTMENTS}
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabContainer,
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.white,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name={SCREENS.APPOINTMENTS}
                component={Appointments}
                options={{
                    tabBarIcon: () => <AppointmentsIcon />,
                    tabBarLabelStyle: styles.tabLabel,
                }}
            />
        </Tab.Navigator>
    );
}

export default ProtectedRoutes;
