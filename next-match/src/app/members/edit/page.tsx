import { CardHeader, Divider, CardBody } from "@nextui-org/react";
import { NextPage } from "next";
import EditForm from "./edit-form";
import { getAuthUserId } from "@/actions/authAction";
import { getMemberByUserId } from "@/actions/memberAction";
import { notFound } from "next/navigation";

interface Props {}

const MemberEditPage: NextPage<Props> = async () => {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);

  if (!member) return notFound();

  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Edit Profile
      </CardHeader>
      <Divider />
      <CardBody>
        <EditForm member={member} />
      </CardBody>
    </>
  );
};

export default MemberEditPage;
