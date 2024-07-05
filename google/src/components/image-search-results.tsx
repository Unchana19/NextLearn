import { SearchResult, SearchResults } from "@/app/search/web/page";
import Link from "next/link";
import { FC } from "react";
import PagginationButton from "./paggination-button";

interface Props {
  results: SearchResults;
}

const ImageSearchResults: FC<Props> = ({ results }: Props): JSX.Element => {
  return (
    <div className="sm:pb-24 pb-40 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((result: SearchResult) => {
          return (
            <div className="mb-8" key={result.link}>
              <div className="group">
                <Link href={result.link}>
                  <img
                    src={
                      result.pagemap?.cse_thumbnail?.[0]?.src ||
                      result.pagemap?.cse_image?.[0]?.src
                    }
                    alt={result.title}
                    className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300"
                  />
                </Link>
                <Link href={result.link}>
                  <h2 className="group-hover:underline truncate text-xl">
                    {result.title}
                  </h2>
                </Link>
                <Link href={result.link}>
                  <p className="group-hover:underline truncate text-gray-600">
                    {result.displayLink}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ml-16">
        <PagginationButton />
      </div>
    </div>
  );
};

export default ImageSearchResults;
