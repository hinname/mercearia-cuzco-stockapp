import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Users from './src/screens/Users';
import Products from './src/screens/Products';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const StackLogin = createNativeStackNavigator();
  const StackProducts = createNativeStackNavigator();
  const StackUsers = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {
        isSignedIn ? (
          <Tab.Navigator>
            <Tab.Screen name="Produtos" options={{headerShown: false}} component={() => {return (
              <StackProducts.Navigator>
                <StackProducts.Screen name="Lista de Produtos" component={Products} />
              </StackProducts.Navigator>
            )}} />
            <Tab.Screen name="Usuários" options={{headerShown: false}} component={() => {return (
              <StackUsers.Navigator>
                <StackUsers.Screen name="Lista de Usuários" component={Users} />
              </StackUsers.Navigator>
            )}} />
          </Tab.Navigator>
        ) : (
          <StackLogin.Navigator>
            <StackLogin.Screen name="Login" component={SignIn} initialParams={{funcSignIn: setIsSignedIn}} />
            <StackLogin.Screen name="Cadastrar-se" component={SignUp} />
          </StackLogin.Navigator>
        )
      }
    </NavigationContainer>
  );
}
