/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = (props: any) => {
  const { title } = props;
  return <div className="hello-world">{title}</div>;
};
HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
