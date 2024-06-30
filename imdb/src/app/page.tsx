import Movie from "@/components/movie";
import { NextPage } from "next";

interface Props {
  searchParams: {
    genre: string;
  };
}

const API_KEY = process.env.API_KEY;

const HomePage: NextPage<Props> = async ({ searchParams }: Props) => {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;

  return (
    <div>
      <Movie movies={results} />
    </div>
  );
};

export default HomePage;
