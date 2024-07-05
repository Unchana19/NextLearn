"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";

interface Props {}

const PagginationButton: FC<Props> = (props): JSX.Element => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = searchParams.get("start") || "1";
  const startIndexNum = parseInt(startIndex) as number;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndexNum >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${
            startIndexNum - 10
          }`}
        >
          <div className="flex items-center cursor-pointer hover:underline">
            <BsChevronBarLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndexNum <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${
            startIndexNum + 10
          }`}
        >
          <div className="flex items-center cursor-pointer hover:underline">
            <BsChevronBarRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PagginationButton;
