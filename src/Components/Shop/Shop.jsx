import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart} from '../../utilities/fakedb';
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
        addToDb(product.id)
    }

    useEffect(()=> {
        const storedCart = getShoppingCart()
        console.log(storedCart)
    }, [])
     
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
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;