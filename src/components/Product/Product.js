import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {

    const {name, id, price, img, seller, ratings} = props.product






    return (
        <div>
            <div className='product-card'>
                <img src={img} alt="productImage" />
                <div className='card-info'>
                    <h1>{name}</h1>
                    <p>Price: $ {price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings} star</p>
                </div>
                <button onClick={ () => props.productAddToCart(props.product)} className='btn'>
                    <p>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>

        </div>
    );
};

export default Product;