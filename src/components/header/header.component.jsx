import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser, history }) => {
  console.log(currentUser);
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
          <div
            className="option"
            onClick={() => auth.signOut().then(() => history.push('/auth'))}
          >
            Sign out
          </div>
        ) : (
          <Link to="/auth" className="option">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Header);
