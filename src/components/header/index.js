import React from 'react';
import styled from 'styled-components';
import Nav from '../nav';
import { Headline } from '../typography';
import Button from '../button';
import Headroom from 'react-headroom';

const Container = styled.header`
  padding: 5px 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffffd1;
`;

const Title = styled(Headline)`
  font-size: 1.8em;
  color: #333;
  margin: 0px;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <Headroom>
      <Container>
        <Title>Photography Portfolio</Title>
        <NavContainer>
          <Nav
            navLinks={[
              { anchor: 'Home', path: '/' },
              { anchor: 'Works', path: '/gallery' },
              { anchor: 'About', path: '/about' }
            ]}
          />
          <Button title="Hire Me" />
        </NavContainer>
      </Container>
    </Headroom>
  );
}
