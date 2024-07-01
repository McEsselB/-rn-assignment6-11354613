// screens/CartScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, Text, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Your cart is empty.</Text>}
      />
    </SafeAreaView>
  );
};

