import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Link as BaseLink } from 'react-router-dom';

export function NavLinks(props) {
  const Link = styled(BaseLink)`
    color: #333;
    font-family: system-ui;
  `;
  const { path, anchor } = props;
  return <Link to={path}>{anchor}</Link>;
}

NavLinks.propTypes = {
  path: Proptypes.string.isRequired,
  anchor: Proptypes.string.isRequired
};

export default function Nav(props) {
  const { navLinks } = props;
  const Navs = styled.nav`
    min-width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  return (
    <Navs>
      {navLinks.map((item, i) => (
        <NavLinks key={i} path={item.path} anchor={item.anchor} />
      ))}
    </Navs>
  );
}

Nav.propTypes = {
  navLinks: Proptypes.object
};
