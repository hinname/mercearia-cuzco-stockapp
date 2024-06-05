import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type LoginStackParamList = {
  signin: {funcSignIn: (isSignedIn: boolean) => void};
}

export type ProductsStackParamList = {
  productsList: undefined;
  formProduct: {productId?: string};
}

export type UsersStackParamList = {
  usersList: undefined;
  formUser: {userId?: string};
}

export type SignInStackTypes = NativeStackScreenProps<LoginStackParamList, 'signin'>;
export type ProductsListStackTypes = NativeStackScreenProps<ProductsStackParamList, 'productsList'>;
export type UsersListStackTypes = NativeStackScreenProps<UsersStackParamList, 'usersList'>;
export type FormProductStackTypes = NativeStackScreenProps<ProductsStackParamList, 'formProduct'>;
export type FormUserStackTypes = NativeStackScreenProps<UsersStackParamList, 'formUser'>;
