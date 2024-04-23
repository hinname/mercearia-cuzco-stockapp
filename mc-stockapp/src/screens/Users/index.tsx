import { useState } from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { IUser } from '../../interfaces';
import UserCard from '../../components/UserCard';

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([
    { id: 1, name: 'Usuário 1', email: 'teste@test.com', password: 'rvbreivbreng' },
    { id: 2, name: 'Usuário 2', email: 'teste@test.com', password: 'rvbreivbreng' },
    { id: 3, name: 'Usuário 3', email: 'teste@test.com', password: 'rvbreivbreng' },
    { id: 4, name: 'Usuário 4', email: 'teste@test.com', password: 'rvbreivbreng' },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder='Nome do usuário' placeholderTextColor={'#7E7E7F'} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>  
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {
        users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      }
      </ScrollView>
    </View>
  );
}