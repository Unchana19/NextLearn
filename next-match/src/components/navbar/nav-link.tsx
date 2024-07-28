"use client";

import useMessageStore from "@/hooks/useMessageStore";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  href: string;
  label: string;
}

const NavLink: FC<Props> = ({ href, label }: Props): JSX.Element => {
  const pathname = usePathname();
  const { unreadCount } = useMessageStore((state) => ({
    unreadCount: state.unreadCount,
  }));

  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>
      <span>{label}</span>
      {href === "/messages" && unreadCount > 0 && (
        <span className="ml-1">({unreadCount})</span>
      )}
    </NavbarItem>
  );
};

export default NavLink;
