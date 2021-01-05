import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/home-page-component';

import './App.css';

const ShopCategory = ({ match }) => {
  return <div>{match.params.cat} Page</div>;
};

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:cat" component={ShopCategory} />
      </Switch>
    </div>
  );
};

export default App;
