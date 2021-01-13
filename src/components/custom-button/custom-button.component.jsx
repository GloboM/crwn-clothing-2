import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleButton, ...otherProps }) => {
  return (
    <button
      className={` custom-button ${isGoogleButton ? 'google-button' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
