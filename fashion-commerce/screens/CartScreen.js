import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cancelIcon = require('../assets/images/remove.png');
const searchIcon = require('../assets/images/Search.png');
const bagIcon = require('../assets/images/shoppingBag.png');

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

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
        <View style={styles.checkoutContainer}>
          <Text style={styles.checkoutText}>CHECKOUT</Text>
          <View style={styles.underlineContainer}>
            <View style={styles.underline}></View>
            <View style={styles.circle}></View>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={searchIcon} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDetail}>{item.detail}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item)}>
        <Image source={cancelIcon} style={styles.cancelIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()} 
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>EST. TOTAL</Text>
          <Text style={styles.totalPrice}>${calculateTotal()}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Image source={bagIcon} style={styles.bagIcon} />
          <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 120,
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  checkoutContainer: {
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: 20,
    letterSpacing: 3
  },
  underlineContainer: {
    position: 'relative',
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  underline: {
    height: 0.5,
    backgroundColor: '#000',
    position: 'absolute',
    width: '100%',
    top: '50%',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  flatListContent: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 150,
    marginRight: 5,
    resizeMode: 'contain',
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDetail: {
    fontSize: 14,
    color: '#888',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'medium',
    marginTop: 5,
    color: '#FC9959',
  },
  cancelIcon: {
    width: 24,
    height: 24,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#888',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalText: {
    fontSize: 16,
    color: '#000',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FC9959',
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    height: 60,
    width: '120%', 
    borderRadius: 8, 
     marginTop: 10,
    marginBottom: -10
  },
  bagIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff', 
    marginRight: 10,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
