import React from 'react';
import { connect } from 'react-redux';

import './cart-item.styles.scss';

const CartItem = ({ item: { id, name, price, imageUrl }, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" className="item-img" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cart }, props) => {
  return {
    quantity: cart.cartItems.find((cartItem) => cartItem.id === props.item.id)
      .quantity,
  };
};
export default connect(mapStateToProps)(CartItem);
