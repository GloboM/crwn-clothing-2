import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/home-page-component';
import ShopPage from './pages/shop/shop.component';
import AuthenticationPage from './pages/authentification/authentication.component';

import './App.css';

const ShopCategory = ({ match }) => {
  return <div>{match.params.cat} Page</div>;
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthenticationPage} />
        <Route exact path="/shop/:cat" component={ShopCategory} />
      </Switch>
    </div>
  );
};

export default App;
