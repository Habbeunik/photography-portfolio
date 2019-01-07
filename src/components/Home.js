import React, { Component } from 'react';
import { createSession } from '../actions';
import Button from './button';
import { H1, Body, Subheading } from './typography';

export class Home extends Component {
  static fetchData(store) {
    // Normally you'd pass action creators to "connect" from react-redux,
    // but since this is a static method you don't have access to "this.props".

    // Dispatching actions from "static fetchData()" will look like this (make sure to return a Promise):
    return store.dispatch(createSession({ id: 1, name: 'Cullen Jett' }));
  }

  render() {
    return (
      <div>
        <H1>Home page</H1>
        <Body>Hey there i am the homepage</Body>
        <Subheading>All part of the homepage</Subheading>
        <Button title="Button" />
      </div>
    );
  }
}

export default Home;
