import { FC } from "react";
import MovieCard from "./movie-card";

export interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
  name: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: [number, number];
  popularity: number;
  release_date: string;
  first_air_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Props {
  movies: Movie[];
}

const Movie: FC<Props> = ({ movies }: Props): JSX.Element => {
  const movieList = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {movieList}
    </div>
  );
};

export default Movie;
