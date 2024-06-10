import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';

import styles from './styles';
import { IUserCreate } from '../../interfaces';
import { getUserById, postUser, putUser } from '../../services/requests/users.requests';
import { FormUserStackTypes } from '../../types/stackNavigation';

export default function FormUser({ navigation, route } : FormUserStackTypes) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (route.params?.userId) {
      setIsUpdate(true);
      fetchUser();
    }
  }
  , []);

  async function fetchUser() {
    const data = await getUserById(route.params.userId ?? '');
    if (!data) {
      alert('Erro ao buscar usuário');
      navigation.goBack();
      return;
    }
    setUserName(data.userName);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber.toString());
  }

  async function handleUpdateProduct() {
    if (!route.params?.userId) {
      alert('Erro ao buscar usuário');
      navigation.goBack();
      return;
    }

    const user: IUserCreate = {
      userName,
      email,
      phoneNumber,
      password
    }

    const data = await putUser(route.params.userId, user);
    if (!data) {
      Alert.alert('Erro ao editar usuário');
      navigation.goBack();
      return;
    }
    Alert.alert('Usuário editado com sucesso!');
    navigation.goBack();
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

    Alert.alert('Usuário cadastrado com sucesso!', 'Deseja enviar dados através do whatsapp?', [
      {
        text: 'Sim',
        onPress: () => {
          const message = `Olá, ${user.userName}! Segue seus dados para acesso: \nEmail: ${user.email}\nSenha: ${user.password}`;
          Linking.openURL(`whatsapp://send?phone=+55${user.phoneNumber}&text=${encodeURIComponent(message)}`);
        }
      },
      {
        text: 'Não'
      }
    ]);
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
            placeholder='Apenas números e com DDD'
            placeholderTextColor="#999"
          />
        </View>
        <View>
          <Text style={styles.inputText}>Senha</Text>
          <TextInput 
            style={styles.input} 
            value={password}
            onChangeText={setPassword}
            autoCapitalize='none'
            placeholder={isUpdate ? 'Deixe em branco para não alterar' : ''}
            placeholderTextColor="#999"
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