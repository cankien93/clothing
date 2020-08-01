import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/custom-button/header/header';
import SignInAndSingUp from '../src/pages/SigninAndSingup/SigninAndSignup';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import Contact from './pages/contact/contact.component.jsx'

import {setCurrentUser} from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';




class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
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
  currentUser: selectCurrentUser,
})

const mapDispatchToprops = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToprops)(App);
// const obj = {
//   prop1: '1',
//   prop2: '2',
//   prop3: '3'
// }
// Object.keys(obj)