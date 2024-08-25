import { POSTER_URL } from "../utils/constants";

const MovieCards = ({ movie }) => {
  if (!movie) return;
  const {title , backdrop_path}  = movie;

  return (
    <div className="relative h-56 aspect-video">
      <div className="relative ">
        <img
          className="h-56 aspect-video"
          src={POSTER_URL + backdrop_path}
          alt=""
        />
      </div>
      <div className="absolute top-0 text-white bg-black bg-opacity-30">
        <div className="flex h-56 aspect-video w-full justify-center items-end">
          <h1 className="text-center font-semibold text-lg pb-4">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
