import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Text from '../components/typography';

storiesOf('Typography', module)
  .add('Body', () => (
    <Text.Body> The quick brown fox jumps over a lazy dog</Text.Body>
  ))
  .add('Subheading', () => (
    <Text.Subheading>
      {' '}
      The quick brown fox jumps over a lazy dog
    </Text.Subheading>
  ))
  .add('Headline', () => (
    <Text.Headline> The quick brown fox jumps over a lazy dog</Text.Headline>
  ))
  .add('Caption', () => (
    <Text.Caption> The quick brown fox jumps over a lazy dog</Text.Caption>
  ))
  .add('H1', () => (
    <Text.H1> The quick brown fox jumps over a lazy dog</Text.H1>
  ))
  .add('H2', () => (
    <Text.H2> The quick brown fox jumps over a lazy dog</Text.H2>
  ))
  .add('H3', () => (
    <Text.H3> The quick brown fox jumps over a lazy dog</Text.H3>
  ));
