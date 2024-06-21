"use client";

import { NextPage } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const Providers: NextPage<Props> = ({ children }: Props) => {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
};

export default Providers;
