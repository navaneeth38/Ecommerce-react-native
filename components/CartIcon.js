import React, {useContext} from "react";
import {View, Text, StyleSheet} from "react-native";
import { Cart } from "../assets/CartContext"; 


function CartIcon({navigation}){
    const {getItemCount} = useContext(Cart);
    return(
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => {navigation.navigate("CartContextDisplay")}}>
            🛒 {getItemCount()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 8,
		backgroundColor: 'whitesmoke',
		height: 39,
		padding: 12,
		borderRadius: 32,
        borderColor: 'black',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 15,
        fontWeight: '350'
	}
})
export default CartIcon;