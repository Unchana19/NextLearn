import { Spinner } from "@nextui-org/react";
import { NextPage } from "next";

interface Props {}

const Loading: NextPage<Props> = () => {
  return (
    <div className="flex justify-center items-center vertical-center">
      <Spinner label="Loading..." color="secondary" labelColor="secondary" />
    </div>
  );
};

export default Loading;
