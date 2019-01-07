import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RoundButton = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px #ccc;
  margin-bottom: 15px;
`;

class IconButton extends React.Component {
  render() {
    return <RoundButton>{this.props.icon}</RoundButton>;
  }
}

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  icon: PropTypes.element.isRequired
};

// IconButton.defaultProps = {
//   icon: () => <div>{null}</div>
// };

export default IconButton;
