import React from 'react';
import './header.scss';

import {ReactComponent as Logo} from '../../../asset/original.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../../firebase/firebase.utils';
import CartIcon from '../../Cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown';

import { selectCartHidden } from '../../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../../redux/user/user.selector';

import { HeaderContainer, LogoContainer, OptionsContainer,  OptionLink} from './header.style.jsx'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer  to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden? null:
            <CartDropdown />
        }
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
