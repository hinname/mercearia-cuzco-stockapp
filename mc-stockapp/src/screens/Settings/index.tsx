import { Alert, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { SettingsTabTypes } from '../../types/bottomTabNavigation';

export default function Settings({navigation, route} : SettingsTabTypes) {
  function handleLogout() {
    Alert.alert('Confirmar saída', 'Deseja realmente sair do aplicativo?', [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Sair',
        onPress: () => route.params.funcSignIn(false)
      }
    ]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.OptionsText}>Opções</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}