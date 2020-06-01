import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header';
import SignInAndSingUp from '../src/pages/SigninAndSingup/SigninAndSingup';
import {auth} from './firebase/firebase.utils'



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user)
      this.setState({ currentUser: user});

    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSingUp} />
      </Switch>
      </div>
    );
  }
  
}

export default App;
