import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type MainTabParamList = {
  products: undefined;
  users: undefined;
  settings: {funcSignIn: (isSignedIn: boolean) => void};
}

export type ProductsTabTypes = BottomTabScreenProps<MainTabParamList, 'products'>;
export type UsersTabTypes = BottomTabScreenProps<MainTabParamList, 'users'>;
export type SettingsTabTypes = BottomTabScreenProps<MainTabParamList, 'settings'>;