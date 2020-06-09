import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header';
import SignInAndSingUp from '../src/pages/SigninAndSingup/SigninAndSignup';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      this.props.setCurrentUser(userAuth);
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
        <Route path='/signin' component={SignInAndSingUp} />
      </Switch>
      </div>
    );
  }
  
}

const mapDispatchToprops = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToprops)(App);
