import { getMembers } from "@/actions/memberAction";
import { NextPage } from "next";
import MemberCard from "./member-card";

interface Props {}

const MembersPage: NextPage<Props> = async () => {
  const members = await getMembers();

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
      {members &&
        members.map((member) => <MemberCard key={member.id} member={member} />)}
    </div>
  );
};

export default MembersPage;
