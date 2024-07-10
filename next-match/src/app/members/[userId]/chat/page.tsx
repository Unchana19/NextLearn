import { CardHeader, Divider, CardBody } from "@nextui-org/react";
import { NextPage } from "next";

interface Props {}

const ChatMemberPage: NextPage<Props> = () => {
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Chat
      </CardHeader>
      <Divider />
      <CardBody>Photos</CardBody>
    </>
  );
};

export default ChatMemberPage;
