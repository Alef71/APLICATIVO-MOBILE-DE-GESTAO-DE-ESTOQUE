import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../global/types';
import { Login } from '../pages/Login';
import { BottomRoutes } from './BottomRoutes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#F6F1E8' },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
