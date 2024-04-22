import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const baseStackScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#ff7926',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: '#000',
}

export const baseTabScreenOptions: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: '#ff7926',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: '#000',
}