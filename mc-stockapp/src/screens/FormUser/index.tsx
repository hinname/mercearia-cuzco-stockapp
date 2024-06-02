import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import { IUserCreate } from '../../interfaces';
import { postUser } from '../../services/requests/users.requests';
import { FormUserStackTypes } from '../../types/stackNavigation';

export default function FormUser({ navigation, route } : FormUserStackTypes) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [user, setUser] = useState<IUserCreate>({
    email: '',
    userName: '',
    password: '',
    phoneNumber: ''
  });
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  async function handleUpdateProduct() {

  }

  async function handleCreateProduct() {
    setUser({
      email,
      userName,
      password,
      phoneNumber
    });

    const data = await postUser(user);
    if (!data) {
      alert('Erro ao cadastrar produto');
      navigation.goBack();
      return;
    }
    alert('Produto cadastrado com sucesso!');
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {
            isUpdate ? 'Editar Usuário' : 'Cadastrar Usuário'
          }
        </Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputText}>Nome</Text>
          <TextInput 
            style={styles.input} 
            value={userName}
            onChangeText={setUserName}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Email</Text>
          <TextInput 
            style={styles.input} 
            keyboardType='email-address' 
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Telefone</Text>
          <TextInput 
            style={styles.input} 
            keyboardType='phone-pad'
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Senha</Text>
          <TextInput 
            style={styles.input} 
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={isUpdate? handleUpdateProduct : handleCreateProduct}>
          <Text style={styles.buttonText}>
            {
              isUpdate ? 'Editar' : 'Cadastrar'
            }
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}