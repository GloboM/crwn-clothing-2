import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { id, name, price, imageUrl, quantity } }) => {
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

export default CartItem;
