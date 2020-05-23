import React from 'react';
import './header.scss';
import {ReactComponent as Logo} from '../../asset/original.svg';
import {Link} from 'react-router-dom'

const Header = () => (
    <div className='header'>
        <Link classname='logo-container'  to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            <Link className='option' to='/signin'>SIGN IN</Link>
        </div>
    </div>
)

export default Header;