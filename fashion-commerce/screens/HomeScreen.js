// screens/HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductCard from '../components/ProductCard';

// Load image assets
const menuIcon = require('../assets/images/Menu.png');
const logoIcon = require('../assets/images/Logo.png');
const searchIcon = require('../assets/images/Search.png');
const shoppingBagIcon = require('../assets/images/shoppingBag.png');

const products = [
  { id: '1', name: 'Office Wear', price: '$120', detail: 'reversible angora cardigan',image: require('../assets/images/dress1.png') },
  { id: '2', name: 'Black', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress2.png') },
  { id: '3', name: 'Church Wear', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress3.png') },
  { id: '4', name: 'Lumeri', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress4.png') },
  { id: '5', name: 'ZWN', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress5.png') },
  { id: '6', name: 'Lopo', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress6.png') },
  { id: '7', name: 'Iame', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress6.png') },
  { id: '8', name: 'ZWN', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress7.png') },
];

const HomeScreen = ({ navigation }) => {
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

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image source={menuIcon} style={styles.menuicon} />
      </TouchableOpacity>
      <Image source={logoIcon} style={styles.logo} />
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image source={searchIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={shoppingBagIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
        {renderHeader()}
        <View>
           <Text>
              OUR STORY
           </Text>
        </View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard product={item} onAddToCart={addToCart} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginTop: 20,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    
   },
  
   menuIcon: {
     marginLeft: 100
  },
  
  icon: {
    width: 22,
     height: 22,
    margin: 10
  },
  logo: {
    width: 120,
    height: 30,
     resizeMode: 'contain',
    color: 'black'
  },
  rightIcons: {
    flexDirection: 'row',
  },
});

export default HomeScreen;
