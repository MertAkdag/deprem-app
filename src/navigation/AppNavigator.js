import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Home, QuakeDetail, MapDetail, Map, siren } from '../views';
import Colors from '../constants/Colors';
import AnimatedTabBar, {TabsConfig, BubbleTabBarItemConfig} from '@gorhom/animated-tabbar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator 

      tabBarOptions={{
        

        activeTintColor: Colors.sari,
        activeBackgroundColor: Colors.primary,
        inactiveBackgroundColor: Colors.primary,
         }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (<Icon name="home" size={size} color={color} />),
          tabBarLabel: 'Ana Sayfa',
        }}
      />
      
      <Tab.Screen
        name="ses"
        component={siren}
        options={{
          tabBarIcon: ({ color, size }) => (<Icon name= 'alarm-bell' size={size} color={color} />),
          tabBarLabel: 'Ses Çal!',
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuakeDetail"
        component={QuakeDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MapDetail"
        component={MapDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;

