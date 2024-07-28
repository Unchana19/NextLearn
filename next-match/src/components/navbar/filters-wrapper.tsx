"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import Filters from "./filters";

interface Props {
  totalCount: number;
}

const FiltersWrapper: FC<Props> = ({
  totalCount,
}: Props): JSX.Element | null => {
  const pathname = usePathname();

  if (pathname === "/members") return <Filters totalCount={totalCount} />;
  else return null;
};

export default FiltersWrapper;
