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
          return <h3 key={movie.id}>{title}</h3>;
        })}
    </section>
  );
}
