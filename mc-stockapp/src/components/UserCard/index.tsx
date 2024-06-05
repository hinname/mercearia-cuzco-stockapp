import { View, Text, TouchableOpacity } from "react-native";
import { IUser } from "../../interfaces";
import Ionicon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

type Props = {
  user: IUser;
};

export default function ProductCard(props: Props) {
  const navigation = useNavigation<any>();
  function handleNavigateToFormUser() {
    navigation.navigate('formUser');
  }
  return (
    <View style={styles.user}>
      <View style={styles.userData}>
        <Text style={styles.userName}>{props.user.userName}</Text>
        <Text style={styles.userEmail}>{props.user.email}</Text>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={handleNavigateToFormUser}>
        <Ionicon name="create" size={24} color="#26ACFF" />
      </TouchableOpacity>
    </View>
  );
}