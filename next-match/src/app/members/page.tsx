import { getMembers } from "@/actions/memberAction";
import { NextPage } from "next";
import MemberCard from "./member-card";
import { fetchCurrentUserLikeIds } from "@/actions/likeAction";
import PaginationComponent from "@/components/pagination-component";
import { UserFilters } from "@/types";

interface Props {
  searchParams: UserFilters;
}

const MembersPage: NextPage<Props> = async ({ searchParams }) => {
  const members = await getMembers(searchParams);
  const likeIds = await fetchCurrentUserLikeIds();

  return (
    <>
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
        {members &&
          members.map((member) => (
            <MemberCard key={member.id} member={member} likeIds={likeIds} />
          ))}
      </div>
      <PaginationComponent />
    </>
  );
};

export default MembersPage;
