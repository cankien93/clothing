import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header';
import SignInAndSingUp from '../src/pages/SigninAndSingup/SigninAndSingup';



function App() {
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

export default App;
