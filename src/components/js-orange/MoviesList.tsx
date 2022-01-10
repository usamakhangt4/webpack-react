/* eslint-disable prettier/prettier */
/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-key */
import React from 'react';
import { ErrorBoundary } from '../../components';

/* eslint-disable react/jsx-filename-extension */
interface componentProps {
  movies?: any[];
}

export default function MoviesList(props: componentProps) {
  const { movies } = props;
  return (
    <section className="movies">
      {movies &&
        movies.map(movie => {
          const title = movie.title.toUpperCase();
          return (
            <>
              <h3 key={movie.id}>{title}</h3>
              <ErrorBoundary children={<BuggyCounter />} />
            </>
          );
        })}
    </section>
  );
}

class BuggyCounter extends React.Component<any, any> {
  constructor(props: number) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }: any) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}
