import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const baseStackScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#0059B1',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: '#fff',
}

export const baseTabScreenOptions: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: '#0059B1',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: '#fff',
  tabBarStyle: {
    backgroundColor: '#0059B1',
  },
  tabBarLabelStyle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#ccc',
}