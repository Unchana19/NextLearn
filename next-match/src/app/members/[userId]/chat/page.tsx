import CardInnerWrapper from "@/components/card-inner-wrapper";
import { NextPage } from "next";
import ChatForm from "./chat-form";
import { getMessageThread } from "@/actions/messageAction";
import { getAuthUserId } from "@/actions/authAction";
import MessageList from "./message-list";
import { createChatId } from "@/lib/utils";

interface Props {
  params: {
    userId: string;
  };
}

const ChatMemberPage: NextPage<Props> = async ({ params }: Props) => {
  const { userId } = params;
  const currentUserId = await getAuthUserId();
  const message = await getMessageThread(userId);
  const chatId = createChatId(currentUserId, userId);

  return (
    <CardInnerWrapper
      header="Chat"
      body={
        <MessageList
          initialMessages={message}
          currentUserId={currentUserId}
          chatId={chatId}
        />
      }
      footer={<ChatForm />}
    />
  );
};

export default ChatMemberPage;
