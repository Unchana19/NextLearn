"use client";

import { NextUIProvider } from "@nextui-org/react";
import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers: NextPage<Props> = ({ children }: Props) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
