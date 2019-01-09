import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import { Link as BaseLink } from 'react-router-dom';

export function NavLinks(props) {
  const Link = styled(BaseLink)`
    color: #4c4a4a;
    font-family: San-Francisco-Regular;
    text-decoration: none;
    font-size: 14px;
  `;
  const { path, anchor } = props;
  return <Link to={path}>{anchor}</Link>;
}

NavLinks.propTypes = {
  path: Proptypes.string.isRequired,
  anchor: Proptypes.string.isRequired
};

export default function Nav(props) {
  const { navLinks, className } = props;
  const Navs = styled.nav`
    min-width: 300px;
    margin-right: 18px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
    margin-bottom: 0px;
  `;
  return (
    <Navs className={className}>
      {navLinks.map((item, i) => (
        <NavLinks key={i} path={item.path} anchor={item.anchor} />
      ))}
    </Navs>
  );
}

Nav.propTypes = {
  navLinks: Proptypes.array,
  className: Proptypes.string
};
