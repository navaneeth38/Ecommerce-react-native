import React, {createContext, useState} from 'react';
import {getProduct} from '../services/ProductServices';

export const Cart = createContext();

const CartContext = (props) => {
  const [items, setItems] = useState([]);

  const addItemTocart = (id) => {
    const product = getProduct(id);
        setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id == id));
            if(!item){
                return [...prevItems, {
                    id, 
                    qty: 1,
                    product, 
                    totalPrice: product.price
                }]
            }else{
                return prevItems.map((item) => {
                    if(item.id == id){
                        item.qty++;
                        item.totalPrice += product.price;
                    }
                    return item;
                })
            }
        })
    }

  const getItemCount = () => {
    return items.reduce((sum,item)=> sum+item.qty ,0 )
  };
  const getTotalPrice = () => {
    return items.reduce((sum,item) => (sum + item.totalPrice), 0)
  };

  return (
    <Cart.Provider value = {{items, getItemCount, addItemTocart, getTotalPrice}}>
        {props.children}
    </Cart.Provider>
  )
};



export default CartContext;
