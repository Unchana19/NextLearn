import LoadingComponent from "@/components/loading-component";
import { NextPage } from "next";

interface Props {}

const Loading: NextPage<Props> = () => {
  return <LoadingComponent />;
};

export default Loading;
