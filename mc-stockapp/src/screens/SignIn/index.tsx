import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { SignInStackTypes } from '../../types/stackNavigation';

export default function SignIn({ navigation, route }: SignInStackTypes) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleCompany}>MERCEARIA CUZCO</Text>
        <Text style={styles.titleApp}>Controle de estoque</Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputText}>Usuário</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.inputText}>Senha</Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}