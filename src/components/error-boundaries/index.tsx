/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable lines-between-class-members */

import React, { Component } from 'react';

export default class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1 className="error">Something went wrong.</h1>
        </>
      );
    }

    return this.props.children;
  }
}
