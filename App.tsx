import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </QueryClientProvider>
    );
}
