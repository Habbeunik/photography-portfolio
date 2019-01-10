import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './nav.scss';

export function NavLinks(props) {
  const { path, anchor } = props;
  return (
    <Link className={styles.link} to={path}>
      <span>{anchor}</span>
    </Link>
  );
}

NavLinks.propTypes = {
  path: Proptypes.string.isRequired,
  anchor: Proptypes.string.isRequired
};

export default function Nav(props) {
  const { navLinks, className } = props;

  return (
    <nav className={[styles.container, className].join(' ')}>
      {navLinks.map((item, i) => (
        <NavLinks key={i} path={item.path} anchor={item.anchor} />
      ))}
    </nav>
  );
}

Nav.propTypes = {
  navLinks: Proptypes.array,
  className: Proptypes.string
};
