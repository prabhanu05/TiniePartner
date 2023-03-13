import EmptyComponent from '@common/EmptyComponent';
import { COLORS } from '@constants/Colors';
import { SCREENS } from '@models/screens';
import BottomScreens from '@models/screens/BottomScreens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import AccountDetails from '@screens/AccountDetails';
import Appointments from '@screens/Appointments';
import Barcode from '@screens/Barcode';
import ServiceList from '@screens/ServiceList';
import styles from '@styles/Navigators/BottomTab';
import AccountDetailsIcon from '@svg/AccountDetailsIcon';
import AppointmentsIcon from '@svg/AppointmentsIcon';
import ServiceListIcon from '@svg/ServiceListIcon';
import ToggleIcon from '@svg/ToggleIcon';

const Tab = createBottomTabNavigator<BottomScreens>();

function ProtectedTabRoutes() {
    const navigation = useNavigation();

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
                name={SCREENS.DRAWER_PROTECTED_ROUTES}
                component={EmptyComponent}
                options={{
                    tabBarIcon: () => <ToggleIcon />,
                    tabBarLabelStyle: styles.hideLabel,
                }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.dispatch(DrawerActions.toggleDrawer());
                    },
                }}
            />

            <Tab.Screen
                name={SCREENS.APPOINTMENTS}
                component={Appointments}
                options={{
                    tabBarLabel: 'Appointments',
                    tabBarIcon: () => <AppointmentsIcon />,
                    tabBarLabelStyle: styles.tabLabel,
                }}
            />

            <Tab.Screen
                name={SCREENS.BARCODE}
                component={Barcode}
                options={{
                    tabBarButton: () => null,
                }}
            />

            <Tab.Screen
                name={SCREENS.SERVICE_LIST}
                component={ServiceList}
                options={{
                    tabBarLabel: 'Services List',
                    tabBarIcon: () => <ServiceListIcon />,
                    tabBarLabelStyle: styles.tabLabel,
                }}
            />

            <Tab.Screen
                name={SCREENS.ACCOUNT_DETAILS}
                component={AccountDetails}
                options={{
                    tabBarLabel: 'Account Details',
                    tabBarIcon: () => <AccountDetailsIcon />,
                    tabBarLabelStyle: styles.tabLabel,
                }}
            />
        </Tab.Navigator>
    );
}

export default ProtectedTabRoutes;
