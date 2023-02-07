import { Fragment, useState, useEffect, useCallback } from "react";

import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://post-request-2a3d9-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      let loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p className="text-center">Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p className="text-center">Loading...</p>;
  }

  const addMovieHandler = async (movie) => {
    const response = fetch(
      "https://post-request-2a3d9-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <Fragment>
      <section className="w-11/12 sm:w-9/12 md:w-7/12 mx-auto py-10 px-8 bg-white rounded-xl my-5">
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section className="w-11/12 sm:w-9/12 md:w-7/12 mx-auto my-5 py-10 px-10 bg-white rounded-xl">
        <button
          onClick={fetchMoviesHandler}
          className="block mx-auto py-3 px-9 text-xl text-white hover:bg-purple-900 bg-[#200048] rounded-full"
        >
          Fetch Movies
        </button>
      </section>
      <section className="w-11/12 sm:w-9/12 md:w-7/12 mx-auto py-5 px-5 sm:px-6 md:px-8 bg-white rounded-xl mb-10">
        {content}
      </section>
    </Fragment>
  );
}

export default App;
