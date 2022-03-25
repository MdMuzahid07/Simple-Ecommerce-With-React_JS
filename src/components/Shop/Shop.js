import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../fakeData/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch("products.json")
        .then(response => response.json())
        .then(data => setProducts(data))
    },[]);


    useEffect( ()=> {
        const storedCart = getStoredCart();

        for(const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            console.groupCollapsed(addedProduct);
        }

    },[]);
    

    const productAddToCart = (product) => {
        let newProduct = [...cart, product];
        setCart(newProduct);

        // add data to localStorage
        addToDb(product.id);
    }




    return (
        <div  className='shop-container'>
           <div className='product-container'>
          
                {
                    products.map((product) => <Product key={product.id} product={product} productAddToCart = {productAddToCart}></Product>)
                }

            
           </div>

                <div className='cart-container'>
                    <Cart cart={cart}></Cart>  
                </div>

          
        </div>
    );
};

export default Shop;