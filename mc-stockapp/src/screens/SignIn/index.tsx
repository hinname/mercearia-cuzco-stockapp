import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { SignInStackTypes } from '../../types/stackNavigation';
import { postLoginUser } from '../../services/requests/users.requests';
import { setItem } from '../../services/storage';

export default function SignIn({ navigation, route }: SignInStackTypes) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignInSubmit() {
    if (!email || !password) {
      Alert.alert('Preencha todos os campos!');
      return;
    }
    const data = await postLoginUser(email, password);
    if (!data) {
      Alert.alert('Usuário ou senha incorretos!');
      return;
    }
    await setItem('token', data);
    route.params.funcSignIn(true);
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
          <TextInput 
            style={styles.input} 
            keyboardType='email-address' 
            onChangeText={setEmail}
            autoCapitalize='none'
          />
        </View>
        <View>
          <Text style={styles.inputText}>Senha</Text>
          <TextInput 
            secureTextEntry={true} 
            style={styles.input} 
            onChangeText={setPassword} 
            autoCapitalize='none'
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignInSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}