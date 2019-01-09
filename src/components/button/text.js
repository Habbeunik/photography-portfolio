import React from 'react';
import { Button as BaseButton } from 'rebass';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled(BaseButton)`
  padding: 12px;
  width: 170px;
  letter-spacing: 0.5px;
  font-size: 16px;
  height: fit-content;
  font-family: San-Francisco-Regular;
`;
export default function Button(props) {
  const { title } = props;
  return (
    <StyledButton bg={'#567ff2'} borderRadius={'20px'} fontWeight={'100'}>
      {title}
    </StyledButton>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  title: 'Title'
};
