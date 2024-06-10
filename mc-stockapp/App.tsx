import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import SignIn from './src/screens/SignIn';
import Users from './src/screens/Users';
import Products from './src/screens/Products';
import Settings from './src/screens/Settings';
import FormProduct from './src/screens/FormProduct';
import FormUser from './src/screens/FormUser';
import Ionicon from "@expo/vector-icons/Ionicons";

import { LoginStackParamList, ProductsStackParamList, UsersStackParamList } from './src/types/stackNavigation';
import { MainTabParamList } from './src/types/bottomTabNavigation';
import { baseStackScreenOptions, baseTabScreenOptions } from './src/configs/screens';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const StackLogin = createNativeStackNavigator<LoginStackParamList>();
  const StackProducts = createNativeStackNavigator<ProductsStackParamList>();
  const StackUsers = createNativeStackNavigator<UsersStackParamList>();
  const Tab = createBottomTabNavigator<MainTabParamList>();

  function ProductsNav() {
    return (
      <StackProducts.Navigator screenOptions={baseStackScreenOptions}>
        <StackProducts.Screen options={{title: 'Lista de Produtos'}} name='productsList' component={Products} />
        <StackProducts.Screen options={{title: 'Formulário de Produtos', headerBackTitle: 'Voltar'}} name='formProduct' component={FormProduct} />
      </StackProducts.Navigator>
    );
  }

  function UsersNav() {
    return (
      <StackUsers.Navigator screenOptions={baseStackScreenOptions}>
        <StackUsers.Screen options={{title: 'Lista de Usuários'}} name='usersList' component={Users} />
        <StackUsers.Screen options={{title: 'Formulário de Usuários', headerBackTitle: 'Voltar'}} name='formUser' component={FormUser} />
      </StackUsers.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {
        isSignedIn ? (
          <Tab.Navigator screenOptions={baseTabScreenOptions}>
            <Tab.Screen name="products" options={{
              headerShown: false,
              tabBarLabel: 'Produtos',
              tabBarIcon: ({ color, size, focused }) => {
                if(focused) {
                  return <Ionicon name="cube" size={size} color={color} />
                }
                return <Ionicon name="cube-outline" size={size} color={color} />
              }
              }} component={ProductsNav} />
            <Tab.Screen name="users" options={{
              headerShown: false,
              tabBarLabel: 'Usuários',
              tabBarIcon: ({ color, size, focused }) => {
                if(focused) {
                  return <Ionicon name="people" size={size} color={color} />
                }
                return <Ionicon name="people-outline" size={size} color={color} />
              }
              }} component={UsersNav} />
            <Tab.Screen name="settings" options={{
              title: "Configurações",
              tabBarLabel: 'Configurações',
              tabBarIcon: ({ color, size, focused }) => {
                if(focused) {
                  return <Ionicon name="settings" size={size} color={color} />
                }
                return <Ionicon name="settings-outline" size={size} color={color} />
              }
              }} component={Settings} initialParams={{funcSignIn: setIsSignedIn}} />
          </Tab.Navigator>
        ) : (
          <StackLogin.Navigator screenOptions={baseStackScreenOptions}>
            <StackLogin.Screen options={{title: 'Login'}} name="signin" component={SignIn} initialParams={{funcSignIn: setIsSignedIn}} />
          </StackLogin.Navigator>
        )
      }
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
