import { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { IProductCreate } from "../../interfaces";
import { getProductById, postProduct, putProduct } from "../../services/requests/products.requests";
import { FormProductStackTypes } from "../../types/stackNavigation";

export default function FormProduct({ navigation, route }: FormProductStackTypes) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [minStockQuantity, setMinStockQuantity] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (route.params?.productId) {
      setIsUpdate(true);
      fetchProduct();
    }
  }
  , []);

  async function fetchProduct() {
    const data = await getProductById(route.params.productId ?? '');
    if (!data) {
      alert('Erro ao buscar produto');
      navigation.goBack();
      return;
    }
    setName(data.name);
    setPrice(data.price.toString());
    setStockQuantity(data.stockQuantity.toString());
    setMinStockQuantity(data.minStockQuantity.toString());
    setDescription(data.description ?? '');
  };

  async function handleUpdateProduct() {
    if (!route.params?.productId) {
      alert('Erro ao buscar produto');
      navigation.goBack();
      return;
    }

    const product: IProductCreate = {
      name,
      price: parseFloat(price),
      stockQuantity: parseInt(stockQuantity),
      minStockQuantity: parseInt(minStockQuantity),
      description
    }

    const data = await putProduct(route.params.productId, product);
    if (!data) {
      Alert.alert('Erro ao editar produto');
      navigation.goBack();
      return;
    }
    Alert.alert('Produto editado com sucesso!');
    navigation.goBack();
  }

  async function handleCreateProduct() {
    const product: IProductCreate = {
      name,
      price: parseFloat(price),
      stockQuantity: parseInt(stockQuantity),
      minStockQuantity: parseInt(minStockQuantity),
      description
    }

    const data = await postProduct(product);
    if (!data) {
      Alert.alert('Erro ao cadastrar produto');
      navigation.goBack();
      return;
    }
    Alert.alert('Produto cadastrado com sucesso!');
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {
            isUpdate ? 'Editar Produto' : 'Cadastrar Produto'
          }
        </Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputText}>Nome</Text>
          <TextInput 
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Preço</Text>
          <TextInput 
            style={styles.input} 
            keyboardType='numeric'
            value={price}
            onChangeText={setPrice}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Quantidade em estoque</Text>
          <TextInput 
            style={styles.input} 
            keyboardType='numeric'
            value={stockQuantity}
            onChangeText={setStockQuantity}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Quantidade mínima para estoque</Text>
          <TextInput 
            style={styles.input} 
            keyboardType='numeric'
            value={minStockQuantity}
            onChangeText={setMinStockQuantity}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Descrição</Text>
          <TextInput 
            style={styles.input} 
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={isUpdate? handleUpdateProduct : handleCreateProduct}>
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