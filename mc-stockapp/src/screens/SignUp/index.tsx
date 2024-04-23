import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SignUpStackTypes } from '../../types/stackNavigation';
import styles from './styles';

export default function SignUp({navigation}: SignUpStackTypes) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUpSubmit() {
    if (!email || !password) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    Alert.alert('Solicitação de cadastro realizada com sucesso!',
      'Aguarde a aprovação do seu cadastro para acessar o aplicativo.',
      [{ 
        text: 'OK',
        onPress: () => navigation.goBack()
      }]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.titleDescription}>Solicite acesso ao aplicativo</Text>
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
        <TouchableOpacity style={styles.button} onPress={handleSignUpSubmit}>
          <Text style={styles.buttonText}>Solicitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}