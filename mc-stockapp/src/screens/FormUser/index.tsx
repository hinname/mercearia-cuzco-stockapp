import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function FormUser() {
  const [isUpdate, setIsUpdate] = useState(false);
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
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.inputText}>Email</Text>
          <TextInput style={styles.input} keyboardType='email-address' />
        </View>
        <View>
          <Text style={styles.inputText}>Senha</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <TouchableOpacity style={styles.button}>
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