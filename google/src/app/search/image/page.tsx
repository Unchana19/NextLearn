"use client";

import ImageSearchResults from "@/components/image-search-results";
import { NextPage } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SearchResults } from "../web/page";

interface Props {}

const ImageSearchPage: NextPage<Props> = async () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const startIndex = searchParams.get("start") || "1";

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchTerm}`
  );
  if (!response.ok) throw new Error("Something went wrong!");
  const data = (await response.json()) as SearchResults;
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found for {searchTerm}</h1>
        <p className="text-lg">
          Try searching the web or images for something else{" "}
          <Link href={"/"} className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <div>{results && <ImageSearchResults results={data} />}</div>;
};

export default ImageSearchPage;
