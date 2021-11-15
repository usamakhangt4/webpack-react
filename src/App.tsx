/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { AllBelts, ApiParactice, JavascriptOrange } from './components';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AllBelts} />
          <Route path="/js-orange" component={JavascriptOrange} />
          <Route path="/api-paractice" component={ApiParactice} />
        </Switch>
      </Router>
    );
  }
}

export default hot(App);
