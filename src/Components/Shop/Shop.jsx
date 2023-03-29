import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data)) 
    } , [])

    const [cart, setCart] = useState([]);

    // button cart ---------------------
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart); 
    }
     


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        key ={product.id} 
                        product ={product}
                        handleAddToCart= {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;