import { FC } from "react";
import MenuItem from "./menu-item";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./dark-mode-switch";

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
