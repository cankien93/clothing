import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

        </div>
        <CustomButton>Go To Check Out</CustomButton>
    </div>
)

export default CartDropdown;