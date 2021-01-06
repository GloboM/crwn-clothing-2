import React from 'react';

import './text-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input-group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? 'shrink-label' : ''}
           form-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
