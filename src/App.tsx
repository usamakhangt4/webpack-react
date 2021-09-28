import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <HelloWorld title="Hello from React webpack" />;
  }
}

export default hot(App);
