import MovieCards from "./MovieCards";

const MoviesList =({title, movies})=>{
 console.log(movies);
    return (
        <div className="p-4">
            <div>
                <h1 className="font-bold text-3xl p-4">{title}</h1>
            </div>
            <div className="flex overflow-x-scroll gap-2 mx-4">
                {movies.map(movie => <MovieCards key={movie?.id} movie={movie}/>)}
                
            </div>
        </div>
    );
};

export default MoviesList;