import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;

    let totalPrice = 0; 
    let totalShipping =0;
    let quantity =0;
    for(const product of cart){
        // if(product.qunatity === 0){
        //     product.qunatity = 1;
        // }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice *7/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {totalPrice.toFixed(2)}</p>
            <p>Total Charge:${totalShipping.toFixed(2)} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: $ {grandTotal.toFixed(2)}</h3>
            <div>
                <button className='btn-clear'>Clear Cart</button>
                <button className='btn-review'>Review Order</button>
            </div>
        </div>

    );
};

export default Cart;