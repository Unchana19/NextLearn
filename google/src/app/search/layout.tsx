import SearchHeader from "@/components/search-header";
import { FC, ReactNode } from "react";
import "./../globals.css";

interface Props {
  children: ReactNode;
}

const SearchLayout: FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
};

export default SearchLayout;
