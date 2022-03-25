import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = (total * 10/100).toFixed(2);

    const grandTotal = total + shipping + +tax;


    return (
        <div>
            <div>
                <h2>Order Summary</h2>
                <p>Selected Items : {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Sipping Price: ${shipping}</p>
                <p>Tax: ${+tax}</p>
                <h5>Grand Total: ${+grandTotal.toFixed(2)}</h5>
           </div>
        </div>
    );
};

export default Cart;