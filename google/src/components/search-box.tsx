"use client";

import { FC, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import * as actions from "@/actions";
import { useSearchParams } from "next/navigation";

interface Props {}

const SearchBox: FC<Props> = (props): JSX.Element => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [search, setSearch] = useState(searchTerm || "");

  return (
    <form action={actions.search}>
      <div className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
        <input
          name="search"
          type="text"
          className="w-full focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <RxCross2
          onClick={() => setSearch("")}
          className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        />
        <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4" />
        <button type="submit">
          <AiOutlineSearch className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
