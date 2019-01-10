import React from 'react';
import styled from 'styled-components';
import Nav from '../nav';
import { Headline } from '../typography';
import Button from '../button';
import Headroom from 'react-headroom';
import PropTypes from 'prop-types';

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

export default function Header(props) {
  const { onHireMe } = props;
  return (
    <div style={{ position: 'relative', zIndex: '4' }}>
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
            <Button title="Hire Me" onClick={() => onHireMe()} />
          </NavContainer>
        </Container>
      </Headroom>
    </div>
  );
}

Header.propTypes = {
  onHireMe: PropTypes.bool
};
