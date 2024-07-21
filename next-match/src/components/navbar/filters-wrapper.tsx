"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import Filters from "./filters";

interface Props {}

const FiltersWrapper: FC<Props> = (props): JSX.Element | null => {
  const pathname = usePathname();

  if (pathname === "/members") return <Filters />;
  else return null;
};

export default FiltersWrapper;
