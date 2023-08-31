import React from 'react';
import PropTypes from 'prop-types';

function Button({
  id, className, onClick, title,
}) {
  return (
    <button type="button" className={className} id={id} onClick={(e) => onClick(e)}>{title}</button>
  );
}

Button.defaultProps = {
  title: '',
  className: '',
  id: '',
  onClick: '',
};

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
