import React from 'react';
import styles from './styles.scss';
import { X } from 'react-feather';
import { Subheading, Body } from '../typography';
import PropTypes from 'prop-types';

export default function HireMe(props) {
  const { isActive, onClose } = props;
  const contentIsActiveStyles = isActive ? styles.contentIsActive : null;
  const overlayIsActiveStyles = isActive ? styles.overlayIsActive : null;
  return (
    <div className={styles.container}>
      <div
        onClick={() => onClose()}
        className={[styles.overlay, overlayIsActiveStyles].join(' ')}
      />
      <div className={[styles.content, contentIsActiveStyles].join(' ')}>
        <div className={styles.cancel} onClick={() => onClose()}>
          <X size={35} />
        </div>
        <Subheading className={styles.title}>Contact</Subheading>
        <Body>To hire me contact me through any of these mediums</Body>
        <Body className={styles.text}>
          <span className={styles.label}>Office:</span> 19 Ogundipe Street
          Ijaiye, Lagos,100001
        </Body>
        <Body className={styles.text}>
          <span className={styles.label}>Email:</span> habbeyunik@gmail.com
        </Body>
        <Body className={styles.text}>
          <span className={styles.label}>Phone No:</span>07064572253
        </Body>
        <Body className={styles.text}>
          <span className={styles.label}>Twitter:</span>@habbeyunik
        </Body>
        <Body className={styles.text} />
      </div>
    </div>
  );
}

HireMe.propTypes = {
  onClose: PropTypes.func,
  isActive: PropTypes.bool
};
