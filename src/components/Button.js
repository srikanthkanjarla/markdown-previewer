import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, handleClick, className } = props;
  return (
    <button type="button" onClick={handleClick} className={className}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Button;
