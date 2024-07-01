import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onAddToCart }) => (
  <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
         <TouchableOpacity onPress={() => onAddToCart(product)} style={styles.iconButton}>
      <Image
        source={require('../assets/images/add_circle.png')}
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.detail}>{product.detail}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    overflow: 'hidden',
    borderColor: '#ddd',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  detail: {
    color: 'grey',
    
  },
  price: {
    fontSize: 14,
    color: '#FC9959',
    marginBottom: 10,
  },
  iconButton: {
    position: 'absolute',
    bottom: 75,
    right: 10,
  },
});

export default ProductCard;
