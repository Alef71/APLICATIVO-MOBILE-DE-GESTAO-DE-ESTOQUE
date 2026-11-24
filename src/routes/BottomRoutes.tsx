import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../global/types';
import { colors } from '../global/theme';
import { RegisterProduct } from '../pages/RegisterProduct';
import { StockExit } from '../pages/StockExit';
import { StockList } from '../pages/StockList';
import { styles } from './styles';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="StockList"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color, focused }) => {
          const iconName =
            route.name === 'RegisterProduct'
              ? focused
                ? 'add-circle'
                : 'add-circle-outline'
              : route.name === 'StockList'
                ? focused
                  ? 'grid'
                  : 'grid-outline'
                : focused
                  ? 'remove-circle'
                  : 'remove-circle-outline';

          return <Ionicons name={iconName} size={21} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="RegisterProduct"
        component={RegisterProduct}
        options={{ tabBarLabel: 'Cadastrar' }}
      />
      <Tab.Screen
        name="StockList"
        component={StockList}
        options={{ tabBarLabel: 'Estoque' }}
      />
      <Tab.Screen
        name="StockExit"
        component={StockExit}
        options={{ tabBarLabel: 'Saída' }}
      />
    </Tab.Navigator>
  );
}
