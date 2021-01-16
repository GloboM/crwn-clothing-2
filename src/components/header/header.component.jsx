import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartDropdown from '../cart-dropdown/cart-dropdown-component';
import CartIcon from '../cart-icon/cart-icon.component';

import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser, cart, history }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/" className="option">
          HOME
        </Link>
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link to="/auth" className="option">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {cart.isVisible && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  cart: state.cart,
});
export default connect(mapStateToProps)(withRouter(Header));
