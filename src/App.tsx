/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { JavascriptOrange } from './components';
import './styles/index.scss';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <JavascriptOrange />;
  }
}

export default hot(App);
