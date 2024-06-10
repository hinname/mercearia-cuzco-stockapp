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
    borderTopWidth: 0,
    height: 106,
    paddingBottom: 20,
  },
  tabBarLabelStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#ccc',
}