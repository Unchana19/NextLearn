"use client";

import { FC, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import * as actions from "@/actions";
import { redirect, useRouter } from "next/navigation";

interface Props {}

const HomeSearch: FC<Props> = (props): JSX.Element => {
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) redirect("/");
    setRandomSearchLoading(false);
    router.push(`/search/web?searchTerm=${response}`);
  };

  return (
    <>
      <form action={actions.search} className="w-full">
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
          <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
          <input
            name="search"
            type="text"
            className="flex-grow focus:outline-none"
          />
          <BsFillMicFill className="text-lg" />
        </div>
        <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
          <button
            type="submit"
            className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
          >
            Google Search
          </button>
          <button
            disabled={randomSearchLoading}
            onClick={randomSearch}
            className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
          >
            {randomSearchLoading ? "Loading..." : "I am Feeling Lucky"}
          </button>
        </div>
      </form>
    </>
  );
};

export default HomeSearch;
