import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type LoginStackParamList = {
  signin: {funcSignIn: (isSignedIn: boolean) => void};
  signup: undefined;
}

export type ProductsStackParamList = {
  productsList: undefined;
  formProduct: undefined;
}

export type UsersStackParamList = {
  usersList: undefined;
  formUser: undefined;
}

export type SignInStackTypes = NativeStackScreenProps<LoginStackParamList, 'signin'>;
export type SignUpStackTypes = NativeStackScreenProps<LoginStackParamList, 'signup'>;
export type ProductsListStackTypes = NativeStackScreenProps<ProductsStackParamList, 'productsList'>;
export type UsersListStackTypes = NativeStackScreenProps<UsersStackParamList, 'usersList'>;
