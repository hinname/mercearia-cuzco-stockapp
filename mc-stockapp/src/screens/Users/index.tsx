import { useState } from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { IUser } from '../../interfaces';
import UserCard from '../../components/UserCard';
import { UsersListStackTypes } from '../../types/stackNavigation';
import { getUsers } from '../../services/requests/users.requests';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export default function Users({ navigation, route} : UsersListStackTypes) {
  const [users, setUsers] = useState<IUser[] | null>([]);
  const [search, setSearch] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      fetchUsers();
    }, [])
  )

  async function fetchUsers() {
    const data = await getUsers();
    if (!data) {
      alert('Erro ao buscar produtos');
    }
    setUsers(data);
  }

  function handleNavigateToFormProduct() {
    navigation.navigate('formUser', {});
  }

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do usuário' 
          placeholderTextColor={'#7E7E7F'} 
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>  
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleNavigateToFormProduct}>
        <Text>Cadastrar Novo Usuário</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
      {
        users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      }
      </ScrollView>
    </View>
  );
}