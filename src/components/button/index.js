import React from 'react';
import TextButton from './text';
import IconButton from './icon';
import PropTypes from 'prop-types';

export default function Button({ isRound, ...restProps }) {
  if (isRound) {
    return <IconButton {...restProps} />;
  }
  return <TextButton {...restProps} />;
}

Button.propsTypes = {
  isRound: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.node
};

Button.defaultProps = {
  isRound: false
};
