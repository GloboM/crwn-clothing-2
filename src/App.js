import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/home-page-component';
import ShopPage from './pages/shop/shop.component';
import AuthenticationPage from './pages/authentification/authentication.component';

import { auth, createUserProfile } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/auth/auth.actions';

import './App.css';

const ShopCategory = ({ match }) => {
  return <div>{match.params.cat} Page</div>;
};

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log('user auth ', userAuth);
      if (userAuth) {
        const userRref = await createUserProfile(userAuth);
        userRref.onSnapshot((snapshot) => {
          this.props.setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            path="/auth"
            render={() => {
              console.log('eva ', !!this.props.currentUser);
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <AuthenticationPage />
              );
            }}
          />
          <Route exact path="/shop/:cat" component={ShopCategory} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  currentUser: auth.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
