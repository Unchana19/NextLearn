import { NextPage } from "next";
import ListTab from "./list-tab";
import {
  fetchCurrentUserLikeIds,
  fetchLikedMembers,
} from "@/actions/likeAction";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: { type: string };
}

const ListsPage: NextPage<Props> = async ({ searchParams }: Props) => {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMembers(searchParams.type);

  return (
    <div>
      <ListTab members={members} likeIds={likeIds} />
    </div>
  );
};

export default ListsPage;
