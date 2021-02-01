import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ({ cartCount, toggleCartVisibility }) => {
  console.log('rendered cart icon');
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

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
