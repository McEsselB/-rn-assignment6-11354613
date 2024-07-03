import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductCard from '../components/ProductCard';

// Load image assets
const menuIcon = require('../assets/images/Menu.png');
const logoIcon = require('../assets/images/Logo.png');
const searchIcon = require('../assets/images/Search.png');
const shoppingBagIcon = require('../assets/images/shoppingBag.png');
const gridIcon = require('../assets/images/Listview.png');
const filterIcon = require('../assets/images/Filter.png');

const products = [
  { id: '1', name: 'Office Wear', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress1.png') },
  { id: '2', name: 'Black', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress2.png') },
  { id: '3', name: 'Church Wear', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress3.png') },
  { id: '4', name: 'Lamerie', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress4.png') },
  { id: '5', name: 'ZWN', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress5.png') },
  { id: '6', name: 'Lopo', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress6.png') },
   { id: '7', name: 'Iame', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress7.png') },
    { id: '8', name: 'Iame', price: '$120', detail: 'reversible angora cardigan', image: require('../assets/images/dress3.png') },

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

  const handleGridPress = () => {
    console.log('Grid button pressed');
  };

  const handleFilterPress = () => {
    console.log('Filter button pressed');
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image source={menuIcon} style={styles.menuIcon} />
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

  const renderOurStoryHeader = () => (
    <View style={styles.ourStoryHeader}>
      <Text style={styles.ourStoryText}>OUR STORY</Text>
      <View style={styles.storyIcons}>
        <TouchableOpacity onPress={handleGridPress}>
          <Image source={gridIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFilterPress}>
          <Image source={filterIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {renderHeader()}
      {renderOurStoryHeader()}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard key={item.id} product={item} onAddToCart={addToCart} />
        )}
        keyExtractor={(item) => item.id.toString()} // Ensure unique keys
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  menuIcon: {
    width: 28,
    height: 24,
  },
  logo: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  ourStoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 7,
  },
  ourStoryText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  storyIcons: {
    flexDirection: 'row',
  },
});

export default HomeScreen;
