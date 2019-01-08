import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Thumbnail = styled.div`
  max-width: 17%;
  height: 120px;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.6')};
  margin-left: 10px;
  display: inline-block;
  overflow: hidden;
  position: relative;
`;
const Overlay = styled.div`
  width: 100%;
  height: 120px;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  opacity: ${({ isActive }) => (isActive ? '0' : '0.6')};
`;
const Image = styled.img`
  width: auto;
  height: 100%;
`;

export default function ImageThumbnail(props) {
  const { isActive, image } = props;
  return (
    <Thumbnail isActive={isActive}>
      <Overlay isActive={isActive} />
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
