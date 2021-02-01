import React from 'react';
import { connect } from 'react-redux';

import {
  removeItem,
  addItem,
  clearItemFromCart,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ dispatch, cartItem }) => {
  const { id, quantity, price, name, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="img-container">
        <img src={imageUrl} alt="" className="item-img" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity-container">
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
