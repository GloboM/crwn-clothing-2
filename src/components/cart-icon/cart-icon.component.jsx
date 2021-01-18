import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ({ cartCount, toggleCartVisibility }) => {
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

const mapStateToProps = ({ cart: { cartItems } }) => {
  const cartCount = cartItems.reduce(
    (accumulator = 0, item) => accumulator + item.quantity,
    0
  );
  return {
    cartCount,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
