import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Cart}  from '../assets/CartContext';
import {getProduct} from '../services/ProductServices';

const ProductDetails = ({route}) => {
  //route the product that has clicked

  const {productId} = route.params; //route.params props passing through navigation
  const [product, setProduct] = useState({});
  const {addItemTocart} = useContext(Cart)

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  const onAddToCart = () =>{
    // console.log(product)
    addItemTocart(product.id)
  }
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={product.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>₹ {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Button onPress= {onAddToCart} color="#ff5c5c"  title="Add to cart" />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});

export default ProductDetails;
