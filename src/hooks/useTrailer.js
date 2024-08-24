import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailer = (movie) =>{
    const dispatch = useDispatch();

    const getTrailer = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movie?.id + "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const movieTrailer = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const mainTrailer = movieTrailer[0];
      dispatch(addTrailer(mainTrailer));
    };
    useEffect(() => {
      getTrailer();
    }, []);
};

export default useTrailer; 