import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./stateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        });
    };

    return (
        <div className='checkoutProduct'>
            <img
                className='checkoutProduct_image'
                src={image}
                alt={title}
            />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>

                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price.toFixed(2)}</strong>
                </p>

                <div className='checkoutProduct_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, index) => (
                            <span key={index}>⭐</span>
                        ))}
                </div>

                <button onClick={removeFromBasket}>
                    Remove from Basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct