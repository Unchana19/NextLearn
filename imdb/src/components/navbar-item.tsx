"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface Props {
  title: string;
  param: string;
}

const NavbarItem: FC<Props> = ({ title, param }: Props): JSX.Element => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
