import React, {useEffect, useState, useContext} from 'react';
import {View, Text, Button, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Cart} from '../assets/CartContext';

const CartContextDisplay = ({navigation}) => {
  const {items, getItemCount, addItemTocart, getTotalPrice} =
    useContext(Cart);
 
    const Totals = () => {
	console.log(total)
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft , styles.lineTotal]}>Total</Text>
        <Text style={styles.mainTotal}>₹ {total}</Text>
      </View>
    );
  };
 
  const renderItem = (item) => {
	console.log(item.item)
  return (
    <>
    <View style={styles.cartLine}>
     <Image style={styles.image} source={item.item.product.image} />
     <Text style={styles.lineLeft}>{item.item.product.name} <Text style={[{fontWeight: 'bold'},{fontSize: 14}]}>x </Text> {item.item.qty} {"\n"}<Text style={styles.mainTotal}>{item.item.totalPrice}</Text></Text>

    </View>
    </>
  )
}
return (
   <View>
	<FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
     />
	 <Button title='Proceed to checkout' onPress={() => {navigation.push('OrderSummary')}} />
   </View>

)
}

const styles = StyleSheet.create({
    cartLine: {
		flexDirection: 'row',
		width: '80%',
		paddingVertical: 10
	},
	image: {
		width: '25%',
		aspectRatio: 1,
		marginRight: 5
	},
	cartLineTotal: {
		flexDirection: 'row',
		borderTopColor: '#dddddd',
		borderTopWidth: 1
	},
	productTotal: {
		fontWeight: 'bold'
	},
	lineTotal: {
		fontWeight: 'bold'
	},
	lineLeft: {
		fontSize: 18,
		lineHeight: 40,
		color: '#333333'
	},
	lineRight: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333333',
		textAlign: 'left',
	},
	mainTotal: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 40,
		color: '#333333',
		textAlign: 'right'
	},
	itemsList: {
		backgroundColor: '#eeeeee'
	},
	itemsListContainer: {
		backgroundColor: '#eeeeee',
		paddingVertical: 8,
		marginHorizontal: 8
    },

});

export default CartContextDisplay;
