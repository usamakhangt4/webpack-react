/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import MoviesList from './MoviesList';

export default function JavascriptOrange() {
  const [movies, setMovies] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?page=${currentPage}`)
      .then(resp => resp.json())
      .then(data => setMovies(data.data.movies));
  }, [currentPage]);

  function handlePrevious() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      alert('No more pages');
    }
  }

  function handleNext() {
    setCurrentPage(currentPage + 1);
  }

  const randomPage = Math.floor(Math.random() * 100) + 1;

  function handleRandom() {
    setCurrentPage(randomPage);
  }

  return (
    <main className="javaScript-orange-belt">
      <h1 className="title">YTS Movies List</h1>
      {movies ? <MoviesList movies={movies} /> : <h1>Loading...</h1>}
      <div className="button-container">
        <button type="button" onClick={() => handlePrevious()}>
          Previous page
        </button>
        <button type="button" onClick={() => handleRandom()}>
          Random page
        </button>
        <button type="button" onClick={() => handleNext()}>
          next page
        </button>
      </div>
    </main>
  );
}
