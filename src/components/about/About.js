import React, { Component } from 'react';
import { imagePath } from '../../utils/assetUtils';
import styles from './about.scss';
import { H1 } from '../typography';

class About extends Component {
  render() {
    return (
      <div>
        <H1 className={styles.title}>About page</H1>
        <img className={styles.reactLogo} src={imagePath('react.svg')} alt="" />
      </div>
    );
  }
}

export default About;
