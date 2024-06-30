import { NextPage } from "next";
import { redirect } from "next/navigation";
import { fetchPostBySearchTerm } from "@/db/queries/posts";
import PostList from "@/components/posts/post-list";

interface Props {
  searchParams: {
    term: string;
  };
}

const SearchPage: NextPage<Props> = ({ searchParams }: Props) => {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostBySearchTerm(term)} />
    </div>
  );
};

export default SearchPage;
