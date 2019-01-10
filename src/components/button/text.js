import React from 'react';
import PropTypes from 'prop-types';
import { button } from './button.scss';

export default function Button(props) {
  const { title, onClick } = props;
  return (
    <button className={button} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  title: 'Title'
};
