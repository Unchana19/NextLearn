import { getMembers } from "@/actions/memberAction";
import { NextPage } from "next";
import MemberCard from "./member-card";
import { fetchCurrentUserLikeIds } from "@/actions/likeAction";

interface Props {}

const MembersPage: NextPage<Props> = async () => {
  const members = await getMembers();
  const likeIds = await fetchCurrentUserLikeIds();

  return (
    <div className="my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
      {members &&
        members.map((member) => <MemberCard key={member.id} member={member} likeIds={likeIds} />)}
    </div>
  );
};

export default MembersPage;
