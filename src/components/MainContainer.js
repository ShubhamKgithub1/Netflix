import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const MainContainer = ({ movie }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const trailerId = trailerVideo?.key;
  const { title, overview } = movie;
  // const dispatch = useDispatch();

  // const getTrailer = async () => {
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   const movieTrailer = json.results.filter(
  //     (video) => video.type === "Trailer"
  //   );
  //   const mainTrailer = movieTrailer[0];
  //   dispatch(addTrailer(mainTrailer));
  // };
  // useEffect(() => {
  //   getTrailer();
  // }, []);
  useTrailer(movie);
  return (
    <div className="relative aspect-video w-screen overflow-hidden">
      <iframe
        className="aspect-video w-screen "
        src={`https://www.youtube.com/embed/${trailerId}?controls=0&autoplay=0&playsinline=1&mute=1&loop=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="absolute top-0 flex items-center w-screen aspect-video text-white bg-black bg-opacity-40">
        <div className="w-[40%] ml-24 mt-[10%]">
          <h1 className="text-4xl font-bold text-green-300">{title}</h1>
          <p className="text-lg font-semibold mt-7 mb-4">{overview}</p>
          <button className="bg-white text-black text-lg font-semibold py-3 px-10 mr-4 rounded-md hover:bg-opacity-70 transition-all duration-200">
            Play
          </button>
          <button className="bg-gray-700 bg-opacity-60 text-white font-semibold text-lg py-3 px-4 rounded-md hover:bg-opacity-100 transition-all duration-200">
            ! More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
