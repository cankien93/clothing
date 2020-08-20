import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/custom-button/header/header';
import SignInAndSingUp from '../src/pages/SigninAndSingup/SigninAndSignup';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import Contact from './pages/contact/contact.component.jsx'

import {checkUserSession} from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';




class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    const {checkUserSession} = this.props;
      checkUserSession();
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'></Redirect>) : (<SignInAndSingUp />)} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/contact' component={Contact} />
      </Switch>
      </div>
    );
  }
  
}



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToprops = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToprops)(App);
