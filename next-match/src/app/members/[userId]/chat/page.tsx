import CardInnerWrapper from "@/components/card-inner-wrapper";
import { NextPage } from "next";
import ChatForm from "./chat-form";

interface Props {}

const ChatMemberPage: NextPage<Props> = () => {
  return (
    <CardInnerWrapper
      header="Chat"
      body={<div>chat goes here</div>}
      footer={<ChatForm />}
    />
  );
};

export default ChatMemberPage;
