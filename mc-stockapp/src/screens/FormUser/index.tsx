import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';
import { IUserCreate } from '../../interfaces';
import { postUser } from '../../services/requests/users.requests';
import { FormUserStackTypes } from '../../types/stackNavigation';

export default function FormUser({ navigation, route } : FormUserStackTypes) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  async function handleUpdateProduct() {

  }

  async function handleCreateProduct() {
    const user: IUserCreate = {
      userName,
      email,
      password,
      phoneNumber,
    };

    const data = await postUser(user);
    if (!data) {
      Alert.alert('Erro ao cadastrar usuario!');
      navigation.goBack();
      return;
    }
    Alert.alert('Produto cadastrado com sucesso!');
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
            autoCapitalize='none'
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
            value={password}
            onChangeText={setPassword}
            autoCapitalize='none'
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