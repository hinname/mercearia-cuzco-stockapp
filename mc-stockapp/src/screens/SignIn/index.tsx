import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { SignInStackTypes } from '../../types/stackNavigation';

export default function SignIn({ navigation, route }: SignInStackTypes) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignInSubmit() {
    if (!email || !password) {
      Alert.alert('Preencha todos os campos!');
      return;
    }
    route.params.funcSignIn(true);
  }

  function handleNavigateToSignUp() {
    navigation.navigate('Cadastro');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleCompany}>MERCADO CUZCO</Text>
        <Text style={styles.titleApp}>Controle de estoque</Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputText}>Email</Text>
          <TextInput style={styles.input} keyboardType='email-address' onChangeText={setEmail} />
        </View>
        <View>
          <Text style={styles.inputText}>Senha</Text>
          <TextInput secureTextEntry={true} style={styles.input} onChangeText={setPassword} />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignInSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={handleNavigateToSignUp}>
          <Text style={styles.linkText}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}