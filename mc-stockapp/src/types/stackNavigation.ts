import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type LoginStackParamList = {
  Login: {funcSignIn: (isSignedIn: boolean) => void};
  Cadastro: undefined;
}
export type SignInStackTypes = NativeStackScreenProps<LoginStackParamList, 'Login'>;
export type SignUpStackTypes = NativeStackScreenProps<LoginStackParamList, 'Cadastro'>;