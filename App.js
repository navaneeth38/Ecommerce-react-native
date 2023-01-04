import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsList from './screens/ProductsList'
import ProductDetails from './screens/ProductDetails'
import CartContextDisplay from './screens/CartContextDisplay';
import CartContext from './assets/CartContext';
import CartIcon from "./components/CartIcon.js";
import OrderSummary from './screens/orderSummary';
import DrawerIcon from './components/DrawerIcon';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <CartContext>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsList} options={({navigation}) => ({headerLeft: ()=> <DrawerIcon navigation={navigation} />,headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({title: 'Product Details', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="CartContextDisplay" component={CartContextDisplay} options={({navigation}) => ({title: 'Cart', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="OrderSummary" component={OrderSummary} />
    </Stack.Navigator>
    </NavigationContainer>
    </CartContext>
  );
}
const styles = StyleSheet.create({
  
});

export default App;

