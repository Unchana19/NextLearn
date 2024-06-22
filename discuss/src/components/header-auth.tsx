"use client";

import {
  Avatar,
  Button,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { FC } from "react";
import * as action from "@/actions";
import { useSession } from "next-auth/react";

interface Props {}

const HeaderAuth: FC<Props> = (props): JSX.Element | null => {
  const session = useSession();

  let authContent: JSX.Element | null;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={action.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <NavbarContent className="flex gap-4">
        <NavbarItem>
          <form action={action.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={action.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </NavbarContent>
    );
  }

  return authContent;
};

export default HeaderAuth;
