import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
const SecondaryContainer = () =>{
    const movies = useSelector(store => store.movies);
    return (
        <div className="">
            <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
            <MoviesList title={"Trending"} movies={movies?.nowPlayingMovies}/>
            <MoviesList title={"Popular"} movies={movies?.nowPlayingMovies}/>
            <MoviesList title={"Latest"} movies={movies?.nowPlayingMovies}/>
        </div>
    );
};

export default SecondaryContainer;