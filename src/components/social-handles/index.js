import React from 'react';
import IconButton from '../button/icon';
import { Facebook, Instagram, Twitter } from 'react-feather';
import * as styles from './handlers.scss';

export default function SocialHanldes() {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com/ikumapayi.abbey" target="#">
        <IconButton icon={<Facebook className={styles.facebook} size={25} />} />
      </a>
      <a href="https://www.twitter.com/habbeyunik" target="#">
        <IconButton icon={<Twitter className={styles.twitter} size={25} />} />
      </a>
      <a href="https://www.instagram.com/evergreenfella/" target="#">
        <IconButton icon={<Instagram size={30} />} />
      </a>
    </div>
  );
}
