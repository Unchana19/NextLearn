"use client";

import { FC } from "react";
import * as actions from "@/actions";

interface Props {}

const SearchBox: FC<Props> = (props): JSX.Element => {
  return (
    <form
      action={actions.search}
      className="flex justify-between px-5 max-w-6xl mx-auto"
    >
      <input
        name="keyword"
        type="text"
        placeholder="Search keyword..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button type="submit" className="text-amber-600">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
