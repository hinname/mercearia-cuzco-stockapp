import { useState } from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { IProduct } from '../../interfaces';
import ProductCard from '../../components/ProductCard';
import { ProductsListStackTypes } from '../../types/stackNavigation';
import { getProducts } from '../../services/requests/products.requests';
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default function Products({ navigation, route } : ProductsListStackTypes) {
  const [products, setProducts] = useState<IProduct[] | null>([]);
  const [search, setSearch] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      fetchProducts();
    }, [])
  )

  async function fetchProducts() {
    const data = await getProducts();
    if (!data) {
      alert('Erro ao buscar produtos');
    }
    setProducts(data);
  }

  function handleNavigateToFormProduct() {
    navigation.navigate('formProduct', {});
  }
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do produto' 
          placeholderTextColor={'#7E7E7F'}
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>  
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleNavigateToFormProduct}>
        <Text>Cadastrar Novo Produto</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
      {
        products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
      </ScrollView>
    </View>
  );
}