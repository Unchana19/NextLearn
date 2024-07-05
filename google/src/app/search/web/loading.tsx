import { NextPage } from "next";

interface Props {}

const WebSearchLoadingPage: NextPage<Props> = () => {
  const PulsePlaceholder = () => (
    <div className="mx-2 pt-10 max-w-6xl lg:pl-52 animate-pulse">
      <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-3.5 w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-2.5 w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-2.5 w-[530px] bg-gray-200 rounded-full mb-2.5"></div>
    </div>
  );
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <PulsePlaceholder key={index} />
      ))}
    </>
  );
};

export default WebSearchLoadingPage;
