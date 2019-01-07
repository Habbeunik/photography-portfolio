import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/button';
import { Facebook, Instagram, Twitter } from 'react-feather';

storiesOf('Button', module)
  .add('Text Button', () => <Button title="Button" />)
  .add('Icon button', () => (
    <React.Fragment>
      <Button icon={<Facebook />} isRound={true} />
      <Button icon={<Twitter />} isRound={true} />
      <Button icon={<Instagram />} isRound={true} />
    </React.Fragment>
  ));
