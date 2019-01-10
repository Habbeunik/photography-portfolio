import React from 'react';
import Nav from '../nav';
import { Headline } from '../typography';
import Button from '../button';
import Headroom from 'react-headroom';
import PropTypes from 'prop-types';
import styles from './header.scss';

export default function Header(props) {
  const { onHireMe } = props;
  return (
    <div style={{ position: 'relative', zIndex: '4' }}>
      <Headroom>
        <div className={styles.container}>
          <Headline className={styles.title}>Photography Portfolio</Headline>
          <div className={styles.navContainer}>
            <Nav
              navLinks={[
                { anchor: 'Home', path: '/' },
                { anchor: 'Works', path: '/gallery' },
                { anchor: 'About', path: '/about' }
              ]}
            />
            <Button title={'Hire Me'} onClick={() => onHireMe()} />
          </div>
        </div>
      </Headroom>
    </div>
  );
}

Header.propTypes = {
  onHireMe: PropTypes.bool
};
