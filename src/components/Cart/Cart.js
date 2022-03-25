import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
             <div className='cart-container'>
                <h2>Order Summary</h2>
                <p>Selected Items : {props.cart.length}</p>
                <p>Total Price: </p>
                <p>Total Price: </p>
           </div>
        </div>
    );
};

export default Cart;