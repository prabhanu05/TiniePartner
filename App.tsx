import { FONTS } from '@constants/Fonts';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/Routes';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function loadAssets() {
            SplashScreen.preventAutoHideAsync();

            await Font.loadAsync({
                LIGHT: FONTS.LIGHT,
                REGULAR: FONTS.REGULAR,
                MEDIUM: FONTS.MEDIUM,
                SEMIBOLD: FONTS.SEMIBOLD,
                BOLD: FONTS.BOLD,
            });

            setLoaded(true);
            SplashScreen.hideAsync();
        }
        loadAssets();
    }, []);

    return (
        <>
            {loaded ? (
                <QueryClientProvider client={queryClient}>
                    <SafeAreaProvider>
                        <NavigationContainer>
                            <Routes />
                        </NavigationContainer>
                    </SafeAreaProvider>
                </QueryClientProvider>
            ) : null}
        </>
    );
}
