import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  
  useNowPlayingMovies();

  const movies=useSelector(store=>store.movies?.nowPlayingMovies);
 if(!movies) return;
  const mainMovie= movies[0];
  
  return (
    <div>
      Browse
      <Header SignInOption={false} LogOutOption={true} />
      <MainContainer movie={mainMovie}/>
    </div>
  );
};

export default Browse;
