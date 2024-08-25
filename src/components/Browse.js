import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];

  return (
    <div className="bg-black text-white">
      <div className="relative  aspect-video overflow-hidden ">
        <div className="z-10 relative bg-gradient-to-b from-black">
          <Header SignInOption={false} LogOutOption={true} />
        </div>
        <div className="w-full absolute aspect-video overflow-hidden -top-20 ">
          <MainContainer movie={mainMovie} />
        </div>
      </div>
      <div className="-mt-80 relative z-20 px-10 mx-10">
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
