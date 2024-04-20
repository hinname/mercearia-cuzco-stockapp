import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const StackSignIn = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {
        isSignedIn ? (
          <View style={styles.container}>
            <Text>Stock App</Text>
            <StatusBar style="auto" />
          </View>
        ) : (
          <View style={styles.container}>
            <Text>Login</Text>
            <StatusBar style="auto" />
          </View>
        )
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
