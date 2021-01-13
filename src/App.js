import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/home-page-component';
import ShopPage from './pages/shop/shop.component';
import AuthenticationPage from './pages/authentification/authentication.component';

import { auth, createUserProfile } from './firebase/firebase.utils';
import './App.css';

const ShopCategory = ({ match }) => {
  return <div>{match.params.cat} Page</div>;
};

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRref = await createUserProfile(userAuth);
        userRref.onSnapshot((snapshot) => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/auth" component={AuthenticationPage} />
          <Route exact path="/shop/:cat" component={ShopCategory} />
        </Switch>
      </div>
    );
  }
}

export default App;
