import Link from "next/link";
import { FC } from "react";

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="font-bold text-3xl" href={"/"}>
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link className="font-bold text-3xl" href={"/performance"}>
            Performance
          </Link>
          <Link className="font-bold text-3xl" href={"/reliability"}>
            Reliability
          </Link>
          <Link className="font-bold text-3xl" href={"/scale"}>
            Scale
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
