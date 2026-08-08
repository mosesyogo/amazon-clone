import React from 'react'
import { useStateValue } from "./stateProvider";
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img
                    className='checkout_ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png'
                    alt='Amazon credit card promotion'
                />

                {basket.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout_title'>
                            Your Shopping Basket ({basket.length})
                        </h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>

            {basket.length > 0 && (
                <div className='checkout_right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout