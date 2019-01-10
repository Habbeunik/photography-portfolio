import React from 'react';
import IconButton from '../button/icon';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter } from 'react-feather';

const Container = styled.div`
  position: fixed;
  top: 30vh;
  left: 8%;
  z-index: 4;
`;

const FacebookIcon = styled(Facebook)`
  fill: #3b5998;
  color: #3b5998;
`;

const TwitterIcon = styled(Twitter)`
  fill: #00aced;
  color: #00aced;
`;

export default function SocialHanldes() {
  return (
    <Container>
      <a href="https://www.facebook.com/ikumapayi.abbey" target="#">
        <IconButton icon={<FacebookIcon size={25} />} />
      </a>
      <a href="https://www.twitter.com/habbeyunik" target="#">
        <IconButton icon={<TwitterIcon size={25} />} />
      </a>
      <a href="https://www.instagram.com/evergreenfella/" target="#">
        <IconButton icon={<Instagram size={30} />} />
      </a>
    </Container>
  );
}
