import Movie from "@/components/movie";
import { NextPage } from "next";

interface Props {
  params: {
    keyword: string;
  };
}

const SearchPage: NextPage<Props> = async ({ params }: Props) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${keyword}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && <h1>No results found</h1>}
      {results && <Movie movies={results} />}
    </div>
  );
};

export default SearchPage;
