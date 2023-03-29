import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings, qunatity} = props.product

    const handleAddToCart = props.handleAddToCart ;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product.info'>
            <h3 className='product-name'>{name}</h3>
            <h2 className='product-price'>Price: $ {price}</h2>
            <h5 className='product-seller'>Manufacturer: {seller}</h5>
            <p>Rating: {ratings} star</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>ADD TO CART</button>
            
        </div>
    );
};

export default Product;