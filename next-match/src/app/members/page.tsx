import { getMembers } from "@/actions/memberAction";
import { NextPage } from "next";
import MemberCard from "./member-card";
import { fetchCurrentUserLikeIds } from "@/actions/likeAction";
import PaginationComponent from "@/components/pagination-component";
import { GetMemberParams } from "@/types";
import EmptyState from "@/components/empty-state";
import FiltersWrapper from "@/components/navbar/filters-wrapper";

interface Props {
  searchParams: GetMemberParams;
}

const MembersPage: NextPage<Props> = async ({ searchParams }) => {
  const { items: members, totalCount } = await getMembers(searchParams);
  const likeIds = await fetchCurrentUserLikeIds();

  return (
    <>
      <FiltersWrapper totalCount={totalCount} />
      {!members || members.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
            {members &&
              members.map((member) => (
                <MemberCard key={member.id} member={member} likeIds={likeIds} />
              ))}
          </div>
          <PaginationComponent totalCount={totalCount} />
        </>
      )}
    </>
  );
};

export default MembersPage;
