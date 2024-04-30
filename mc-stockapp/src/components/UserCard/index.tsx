import { View, Text, TouchableOpacity } from "react-native";
import { IUser } from "../../interfaces";
import Ionicon from "@expo/vector-icons/Ionicons";

import styles from "./styles";

type Props = {
  user: IUser;
};

export default function ProductCard(props: Props) {
  return (
    <View style={styles.user}>
      <View style={styles.userData}>
        <Text style={styles.userName}>{props.user.name}</Text>
        <Text style={styles.userEmail}>{props.user.email}</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Ionicon name="create" size={24} color="#26ACFF" />
      </TouchableOpacity>
    </View>
  );
}