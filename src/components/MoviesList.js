import MovieCards from "./MovieCards";

const MoviesList = ({ title, movies }) => {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-xl py-6">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll gap-2 scrollbar-hide transition-all transform duration-150 ">
        {movies?.map((movie) => (
          <MovieCards key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
