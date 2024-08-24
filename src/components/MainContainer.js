import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const MainContainer = ({ movie }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const trailerId = trailerVideo?.key;
  const { title, overview } = movie;
  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
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
  return (
    <div>
      <div className="px-10 w-[40%]">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg font-semibold mt-7 mb-4">{overview}</p>
        <button className="bg-black text-white text-lg font-semibold py-3 px-10 mr-4 rounded-md">
          Play
        </button>
        <button className="bg-gray-700 bg-opacity-45 text-white font-semibold text-lg py-3 px-4 rounded-md">
          ! More Info
        </button>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + trailerId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MainContainer;
