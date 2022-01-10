/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */

interface componetProps {
  Component: () => JSX.Element;
}

export default function Hoc(props: componetProps) {
  const { Component } = props;
  return (
    <>
      <Component />
    </>
  );
}
