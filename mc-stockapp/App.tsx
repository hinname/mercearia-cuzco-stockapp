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

import { LoginStackParamList, MainTabParamList, ProductsStackParamList, UsersStackParamList } from './src/types/stackNavigation';
import Settings from './src/screens/Settings';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const StackLogin = createNativeStackNavigator<LoginStackParamList>();
  const StackProducts = createNativeStackNavigator<ProductsStackParamList>();
  const StackUsers = createNativeStackNavigator<UsersStackParamList>();
  const Tab = createBottomTabNavigator<MainTabParamList>();

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
        <StackProducts.Screen options={{title: 'Lista de Produtos'}} name="productsList" component={Products} />
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
        <StackUsers.Screen options={{title: 'Lista de Usuários'}} name="usersList" component={Users} />
      </StackUsers.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {
        isSignedIn ? (
          <Tab.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#ff7926',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: '#000',
          }}>
            <Tab.Screen name="products" options={{headerShown: false}} component={ProductsNav} />
            <Tab.Screen name="users" options={{headerShown: false}} component={UsersNav} />
            <Tab.Screen name="settings" options={{title: "Configurações"}} component={Settings} initialParams={{funcSignIn: setIsSignedIn}} />
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
            <StackLogin.Screen options={{title: 'Login'}} name="signin" component={SignIn} initialParams={{funcSignIn: setIsSignedIn}} />
            <StackLogin.Screen options={{title: 'Cadastro'}} name="signup" component={SignUp} />
          </StackLogin.Navigator>
        )
      }
    </NavigationContainer>
  );
}
