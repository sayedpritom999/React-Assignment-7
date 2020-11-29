import React from 'react';
import css from './Cart.css'
const Cart = (props) => {
    let cart = props.cart;
    let totalPrice = 0;
    if(cart.length >= 1) {
        totalPrice = (cart.reduce((acc, obj) => acc + obj.price, 0).toFixed(2));
    }
    return (
        <div>
            <div className="cart">
                <h4>Cart: {cart.length}</h4>
                <h6>Total Price: ${totalPrice}</h6>
            </div>
        </div>
    );
};

export default Cart;