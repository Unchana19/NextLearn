"use client";

import { NextPage } from "next";
import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage: NextPage<Props> = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong, Please try again later.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
