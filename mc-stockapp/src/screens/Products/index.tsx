import { useState } from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { IProduct } from '../../interfaces';
import ProductCard from '../../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([
    { id: 1, name: 'Produto 1', price: 10.00, qtd: 10 },
    { id: 2, name: 'Produto 2', price: 10.00, qtd: 10 },
    { id: 3, name: 'Produto 3', price: 10.00, qtd: 10 },
    { id: 4, name: 'Produto 4', price: 10.00, qtd: 10 },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder='Nome do produto' placeholderTextColor={'#7E7E7F'} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>  
      </View>
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