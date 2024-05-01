import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Users from './src/screens/Users';
import Products from './src/screens/Products';
import Settings from './src/screens/Settings';
import FormProduct from './src/screens/FormProduct';

import { LoginStackParamList, ProductsStackParamList, UsersStackParamList } from './src/types/stackNavigation';
import { MainTabParamList } from './src/types/bottomTabNavigation';
import { baseStackScreenOptions, baseTabScreenOptions } from './src/configs/screens';
import { StatusBar } from 'expo-status-bar';


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
              }} component={ProductsNav} />
            <Tab.Screen name="users" options={{
              headerShown: false,
              tabBarLabel: 'Usuários',
              }} component={UsersNav} />
            <Tab.Screen name="settings" options={{title: "Configurações"}} component={Settings} initialParams={{funcSignIn: setIsSignedIn}} />
          </Tab.Navigator>
        ) : (
          <StackLogin.Navigator screenOptions={baseStackScreenOptions}>
            <StackLogin.Screen options={{title: 'Login'}} name="signin" component={SignIn} initialParams={{funcSignIn: setIsSignedIn}} />
            <StackLogin.Screen options={{title: 'Cadastro'}} name="signup" component={SignUp} />
          </StackLogin.Navigator>
        )
      }
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
