import { FC } from "react";
import NavbarItem from "./navbar-item";

interface Props {}

const Navbar: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
