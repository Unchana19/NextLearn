import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  address: string;
  Icon: IconType;
}

const MenuItem: FC<Props> = ({ title, address, Icon }: Props): JSX.Element => {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
