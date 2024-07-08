"use client";

import { NextUIProvider } from "@nextui-org/react";
import { NextPage } from "next";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  children: ReactNode;
}

const Providers: NextPage<Props> = ({ children }: Props) => {
  return (
    <NextUIProvider>
      <ToastContainer
        position="bottom-right"
        hideProgressBar
        className="z-50"
      />
      {children}
    </NextUIProvider>
  );
};

export default Providers;
