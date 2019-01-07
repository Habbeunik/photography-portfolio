import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Thumbnail = styled.div`
  max-width: 17%;
  height: 120px;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.6')};
  margin-left: 10px;
  display: inline-block;
`;
const Image = styled.img`
  width: auto;
  height: 100%;
`;

export default function ImageThumbnail(props) {
  const { isActive, image } = props;
  return (
    <Thumbnail isActive={isActive}>
      <Image src={image} />
    </Thumbnail>
  );
}

ImageThumbnail.propTypes = {
  isActive: PropTypes.bool,
  image: PropTypes.oneOf([PropTypes.string])
};

ImageThumbnail.defaultProps = {
  isActive: false
};
