import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];

  return (
    <div>
      <div className="relative h-[90vh] overflow-hidden  bg-gray-200">
        <div className="z-10 relative bg-gradient-to-b from-black">
          <Header SignInOption={false} LogOutOption={true} />
        </div>
        <div className="w-full absolute -top-20 ">
          <MainContainer movie={mainMovie} />
        </div>
      </div>
      <div>
        <SecondaryContainer/>
      </div>
    </div>
  );
};

export default Browse;
