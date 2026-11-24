import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StockProvider } from './src/context/StockContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <StockProvider>
        <StatusBar style="dark" />
        <Routes />
      </StockProvider>
    </SafeAreaProvider>
  );
}
