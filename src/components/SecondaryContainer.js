import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies.nowPlayingMovies) return;
  return (
    <div>
      <MoviesList
        title={"Now Playing Movies"}
        movies={movies?.nowPlayingMovies}
      />
      <MoviesList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
      <MoviesList title={"Popular"} movies={movies?.popularMovies} />
      <MoviesList title={"UpComing Movies"} movies={movies?.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
