import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseLDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
