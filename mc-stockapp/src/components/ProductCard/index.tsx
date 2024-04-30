import { View, Text, TouchableOpacity } from "react-native";
import { IProduct } from "../../interfaces";
import Ionicon from "@expo/vector-icons/Ionicons";

import styles from "./styles";

type Props = {
  product: IProduct;
};

export default function ProductCard(props: Props) {
  return (
    <View style={styles.product}>
      <View style={styles.productData}>
        <Text style={styles.productName}>{props.product.name}</Text>
        <Text style={styles.productPrice}>R$ {props.product.price}</Text>
        <Text style={styles.productQtd}>quantidade: {props.product.qtd}</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Ionicon name="create" size={24} color="#26ACFF" />
      </TouchableOpacity>
    </View>
  );
}