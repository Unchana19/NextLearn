import { getMemberByUserId } from "@/actions/memberAction";
import { CardBody, CardHeader, Divider } from "@nextui-org/react";
import { NextPage } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { userId: string };
}

const MemberDetailedPage: NextPage<Props> = async ({ params }: Props) => {
  const { userId } = params;
  const member = await getMemberByUserId(userId);

  if (!member) return notFound();

  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Profile
      </CardHeader>
      <Divider />
      <CardBody>{member.description}</CardBody>
    </>
  );
};

export default MemberDetailedPage;
