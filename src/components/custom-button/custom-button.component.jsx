import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleButton, inverted, ...otherProps }) => {
  return (
    <button
      className={` custom-button ${inverted ? 'inverted' : ''} ${isGoogleButton ? 'google-button' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
