import { FONTS } from '@constants/Fonts';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/Routes';
import store from '@store/store';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

export default function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function loadAssets() {
            SplashScreen.preventAutoHideAsync();

            await Font.loadAsync({
                light: FONTS.LIGHT,
                regular: FONTS.REGULAR,
                medium: FONTS.MEDIUM,
                semibold: FONTS.SEMIBOLD,
                bold: FONTS.BOLD,
            });

            setLoaded(true);
            SplashScreen.hideAsync();
        }
        loadAssets();
    }, []);

    return (
        <>
            {loaded ? (
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <SafeAreaProvider>
                            <NavigationContainer>
                                <Routes />
                            </NavigationContainer>
                        </SafeAreaProvider>
                    </QueryClientProvider>
                </Provider>
            ) : null}
            <StatusBar translucent style='auto' />
        </>
    );
}
