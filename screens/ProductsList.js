import React,{useEffect,useState} from 'react';
import {View, Text, FlatList, StyleSheet, StatusBar} from 'react-native';
import { getProducts } from '../services/ProductServices';
import Product from '../components/Product'
const ProductsList = ({navigation}) => {
    const renderProduct=({item: product})=>{
       return (<Product 
           {...product} 
           onPress={()=>{
            navigation.navigate('ProductDetails',{productId: product.id})
           }}
        />)
    }
    
    const [products, setProducts] = useState([]);

    useEffect(() =>{
       setProducts(getProducts())
    })
    
    
    return(
        <View>
           <StatusBar style="dark"/>
           <FlatList 
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    productsListContainer: {
        backgroundColor: "#eeeeee",
        paddingVertical: 8,
        marginHorizontal: 8,
      },
      productsList:{
        backgroundColor: "#eeeeee",
      }
})

export default ProductsList;
