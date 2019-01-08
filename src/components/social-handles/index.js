import React from 'react';
import IconButton from '../button/icon';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter } from 'react-feather';

const Container = styled.div`
  position: fixed;
  top: 30vh;
  left: 8%;
`;

export default function SocialHanldes() {
  return (
    <Container>
      <IconButton icon={<Facebook />} />
      <IconButton icon={<Twitter />} />
      <IconButton icon={<Instagram />} />
    </Container>
  );
}
