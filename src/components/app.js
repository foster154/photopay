import React, { Component } from 'react';
import Header from './header.js';
import {StyleRoot} from 'radium';

export default class App extends Component {
  render() {
    return (
      <StyleRoot>
        <Header />
        {this.props.children}
      </StyleRoot>
    );
  }
}
