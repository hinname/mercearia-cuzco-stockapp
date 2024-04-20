import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type LoginStackParamList = {
  Login: {funcSignIn: Function};
  Cadastro: undefined;
}
export type SignInStackTypes = NativeStackScreenProps<LoginStackParamList, 'Login'>;