import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RoundButton = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px #232222;
  margin-bottom: 15px;
`;

export default function IconButton({ icon }) {
  return <RoundButton>{icon}</RoundButton>;
}

IconButton.propTypes = {
  icon: PropTypes.element.isRequired
};

IconButton.defaultProps = {
  icon: function Icon() {
    return <div>{null}</div>;
  }
};