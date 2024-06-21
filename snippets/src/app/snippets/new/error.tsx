"use client";

import { NextPage } from "next";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage: NextPage<Props> = ({ error, reset }: Props) => {
  return <div>{error.message}</div>;
};

export default ErrorPage;
