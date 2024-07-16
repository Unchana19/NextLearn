import { getMemberByUserId } from "@/actions/memberAction";
import CardInnerWrapper from "@/components/card-inner-wrapper";
import { NextPage } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { userId: string };
}

const MemberDetailedPage: NextPage<Props> = async ({ params }: Props) => {
  const { userId } = params;
  const member = await getMemberByUserId(userId);

  if (!member) return notFound();

  return <CardInnerWrapper header="Profile" body={<div>Chat goes here</div>} footer={<div>Char form goes here</div>} />;
};

export default MemberDetailedPage;
