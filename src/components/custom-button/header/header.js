import React from 'react';
import './header.scss';

import {ReactComponent as Logo} from '../../../asset/original.svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../../firebase/firebase.utils';
import CartIcon from '../../Cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown';

import { selectCartHidden } from '../../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../../redux/user/user.selector';



const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container'  to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden? null:
            <CartDropdown />
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);