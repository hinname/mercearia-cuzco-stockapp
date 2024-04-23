import { View, Text } from "react-native";
import { IProduct } from "../../interfaces";

import styles from "./styles";

type Props = {
  product: IProduct;
};

export default function ProductCard(props: Props) {
  return (
    <View style={styles.product}>
      <Text style={styles.productName}>{props.product.name}</Text>
      <Text style={styles.productPrice}>R$ {props.product.price}</Text>
      <Text style={styles.productQtd}>quantidade: {props.product.qtd}</Text>
    </View>
  );
}