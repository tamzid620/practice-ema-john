import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;

let totalPrice = 0; 
for(const product of cart){
    totalPrice = totalPrice + product.price;
}

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Charge: </p>
            <p>Tax: </p>
            <h3>Grand Total: $</h3>
        </div>
    );
};

export default Cart;