import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type LoginStackParamList = {
  signin: {funcSignIn: (isSignedIn: boolean) => void};
  signup: undefined;
}

export type MainTabParamList = {
  products: undefined;
  users: undefined;
}

export type ProductsStackParamList = {
  productsList: undefined;
}

export type UsersStackParamList = {
  usersList: undefined;
}

export type SignInStackTypes = NativeStackScreenProps<LoginStackParamList, 'signin'>;
export type SignUpStackTypes = NativeStackScreenProps<LoginStackParamList, 'signup'>;
export type ProductsStackTypes = NativeStackScreenProps<MainTabParamList, 'products'>;
export type UsersStackTypes = NativeStackScreenProps<MainTabParamList, 'users'>;