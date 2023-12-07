import React, {useContext} from 'react'
import { PRODUCTS } from '../../products';
import {shopContext} from '../../context/shop-context';
import {CartItem} from './cart-item'
import {useNavigate} from 'react-router-dom';
import './cart.css';
export const Cart = () => {
  const { cartItems, getTotalCartAmount} = useContext(shopContext);
  const totalAMount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id]!==0){
            return <CartItem data={product}/>;
          } 
        })}
      </div>
      {totalAMount > 0 ? (
      <div className='checkout'>
        <p>Subtotal: ${totalAMount}</p>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      ): (
        <h1>Your cart is Empty</h1>
      )}
    </div>
  );
};

