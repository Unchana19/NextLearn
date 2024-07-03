"use client";

import { NextPage } from "next";
import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const SearchErrorPage: NextPage<Props> = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(`error ${error}`);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Something went wrong!</h1>
      <button onClick={() => reset()} className="text-blue-500">
        Try again
      </button>
    </div>
  );
};

export default SearchErrorPage;
