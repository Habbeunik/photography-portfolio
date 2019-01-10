import React from 'react';
import PropTypes from 'prop-types';
import { roundButton } from './button.scss';

export default function IconButton({ icon }) {
  return <button className={roundButton}>{icon}</button>;
}

IconButton.propTypes = {
  icon: PropTypes.element.isRequired
};

IconButton.defaultProps = {
  icon: function Icon() {
    return <div>{null}</div>;
  }
};
