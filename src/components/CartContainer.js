import React from 'react';
import { useGlobalContext } from '../context';
import { data } from '../data';
import CartItem from './CartItem';
import Footer from './Footer';

const CartContainer = () => {

    const {cart} = useGlobalContext(data);

    if(cart.length === 0) {
        return (
            <header>
                <h2>Your Bag</h2>
                <h4>is currently empty</h4>
            </header>
        )
    }

    return (
        <div>
            <header>
                <h2>Your Bag</h2>
            </header>
            <div className="cartItem_container">
                {cart.map(item => (
                    <CartItem key={item.id} {...item}/>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default CartContainer;
