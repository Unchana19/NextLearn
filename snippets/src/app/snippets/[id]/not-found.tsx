import { NextPage } from "next";

interface Props {}

const SnippetNotFound: NextPage<Props> = () => {
  return (
    <div className="text-xl bold">
      <h1>Sorry, but we couldnt find particular snippet</h1>
    </div>
  );
};

export default SnippetNotFound;
