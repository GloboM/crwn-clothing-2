export const addItemWithObject = (itemToAdd, cartItems) => {
  const item = cartItems[itemToAdd.id];
  return item
    ? {
        ...cartItems,
        [itemToAdd.id]: {
          ...cartItems[itemToAdd.id],
          quantity: cartItems[itemToAdd.id].quantity + 1,
        },
      }
    : { ...cartItems, [itemToAdd.id]: { ...itemToAdd, quantity: 1 } };
};

export const addItemWithArray = (itemToAdd, cartItems) => {
  const item = cartItems.find((item) => item.id === itemToAdd.id);
  return item
    ? cartItems.map((item) =>
        item.id === itemToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    : [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existingItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
