import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import { LoginStackParamList } from './src/types/stackNavigation';

import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Users from './src/screens/Users';
import Products from './src/screens/Products';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const StackLogin = createNativeStackNavigator<LoginStackParamList>();
  const StackProducts = createNativeStackNavigator();
  const StackUsers = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function ProductsNav() {
    return (
      <StackProducts.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#ff7926',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#000',
      
      }}>
        <StackProducts.Screen name="Lista de Produtos" component={Products} />
      </StackProducts.Navigator>
    );
  }

  function UsersNav() {
    return (
      <StackUsers.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#ff7926',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#000',
      }}>
        <StackUsers.Screen name="Lista de Usuários" component={Users} />
      </StackUsers.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {
        isSignedIn ? (
          <Tab.Navigator>
            <Tab.Screen name="Produtos" options={{headerShown: false}} component={ProductsNav} />
            <Tab.Screen name="Operadores" options={{headerShown: false}} component={UsersNav} />
          </Tab.Navigator>
        ) : (
          <StackLogin.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#ff7926',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: '#000',
          }}>
            <StackLogin.Screen name="Login" component={SignIn} initialParams={{funcSignIn: setIsSignedIn}} />
            <StackLogin.Screen name="Cadastro" component={SignUp} />
          </StackLogin.Navigator>
        )
      }
    </NavigationContainer>
  );
}
