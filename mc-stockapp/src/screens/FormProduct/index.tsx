import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function FormProduct() {
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {
            isEditingProduct ? 'Editar Produto' : 'Cadastrar Produto'
          }
        </Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputText}>Nome</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.inputText}>Preço</Text>
          <TextInput style={styles.input} keyboardType='numeric' />
        </View>
        <View>
          <Text style={styles.inputText}>Quantidade em estoque</Text>
          <TextInput style={styles.input} keyboardType='numeric' />
        </View>
        <View>
          <Text style={styles.inputText}>Quantidade mínima para estoque</Text>
          <TextInput style={styles.input} keyboardType='numeric' />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            {
              isEditingProduct ? 'Editar' : 'Cadastrar'
            }
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}