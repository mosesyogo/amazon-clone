import React from 'react'
import './Subtotal.css'
import { NumericFormat } from 'react-number-format';
import { useStateValue } from './stateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className='subtotal'>
            <p>
                Subtotal ({basket.length} items):{' '}
                <strong>
                    <NumericFormat
                        value={getBasketTotal(basket)}
                        displayType='text'
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        prefix='$'
                    />
                </strong>
            </p>

            <small className='subtotal_gift'>
                <input type='checkbox' />
                This order contains a gift
            </small>

            <button className='subtotal_button'>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal