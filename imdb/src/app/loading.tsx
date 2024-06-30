import { NextPage } from "next";

interface Props {}

const LoadingPage: NextPage<Props> = () => {
  return (
    <div className="flex justify-center mt-16">
      <img className="h-52" src="loading-spinner.svg" alt="loading..." />
    </div>
  );
};

export default LoadingPage;
