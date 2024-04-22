import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type LoginStackParamList = {
  signin: {funcSignIn: (isSignedIn: boolean) => void};
  signup: undefined;
}

export type ProductsStackParamList = {
  productsList: undefined;
}

export type UsersStackParamList = {
  usersList: undefined;
}

export type SignInStackTypes = NativeStackScreenProps<LoginStackParamList, 'signin'>;
export type SignUpStackTypes = NativeStackScreenProps<LoginStackParamList, 'signup'>;
