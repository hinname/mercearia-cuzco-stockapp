import { useState } from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { IProduct } from '../../interfaces';
import ProductCard from '../../components/ProductCard';
import { ProductsListStackTypes } from '../../types/stackNavigation';

export default function Products({ navigation, route } : ProductsListStackTypes) {
  const [products, setProducts] = useState<IProduct[]>([
    { id: 1, name: 'Produto 1', price: 10.00, qtd: 10 },
    { id: 2, name: 'Produto 2', price: 10.00, qtd: 10 },
    { id: 3, name: 'Produto 3', price: 10.00, qtd: 10 },
    { id: 4, name: 'Produto 4', price: 10.00, qtd: 10 },
  ]);

  function handleNavigateToFormProduct() {
    navigation.navigate('formProduct');
  }
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder='Nome do produto' placeholderTextColor={'#7E7E7F'} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>  
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleNavigateToFormProduct}>
        <Text>Cadastrar Novo Produto</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
      </ScrollView>
    </View>
  );
}