import { View, Text, TouchableOpacity } from "react-native";
import { IProduct } from "../../interfaces";
import Ionicon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { ProductsListStackTypes } from "../../types/stackNavigation";

type Props = {
  product: IProduct;
};

export default function ProductCard(props: Props) {
  const navigation = useNavigation<any>();

  function handleNavigateToFormProduct() {
    navigation.navigate('formProduct');
  }
  return (
    <View style={styles.product}>
      <View style={styles.productData}>
        <Text style={styles.productName}>{props.product.name}</Text>
        <Text style={styles.productPrice}>R$ {props.product.price}</Text>
        <Text style={styles.productQtd}>quantidade: {props.product.stockQuantity}</Text>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={handleNavigateToFormProduct}>
        <Ionicon name="create" size={24} color="#26ACFF" />
      </TouchableOpacity>
    </View>
  );
}