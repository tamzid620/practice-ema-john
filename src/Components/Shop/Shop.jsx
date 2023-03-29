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
        let newCart = [];
        // const newCart = [...cart, product]
        const exists = cart.find(pd => pd.id === product.id);
    if(!exists){
        product.quantity = 1;
        newCart = [...cart, product];
    }else{
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter(pd => pd.id !== product.id);
        newCart = [...remaining, exists]
    }
        setCart(newCart); 
        addToDb(product.id)
    }

    useEffect(()=> {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find( product => product.id === id)
            if(addedProduct){
                const qunatity = storedCart[id]
                addedProduct.qunatity = qunatity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    } , [products])
     
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