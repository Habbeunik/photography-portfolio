import React from 'react';
import { Button as BaseButton } from 'rebass';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled(BaseButton)`
  padding: 12px;
  width: 150px;
  font-size: 14px;
`;
export default function Button(props) {
  const { title } = props;
  return (
    <StyledButton bg={'#56CCF2'} borderRadius={'20px'} fontWeight={'100'}>
      {title}
    </StyledButton>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

Button.defaultProps = {
  title: 'Title'
};
