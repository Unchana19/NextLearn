import { FC } from "react";
import { Movie } from "./movie";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

interface Props {
  movie: Movie;
}

const MovieCard: FC<Props> = ({ movie }: Props): JSX.Element => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{movie.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center">
            {movie.release_date || movie.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
