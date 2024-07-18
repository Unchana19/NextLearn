import CardInnerWrapper from "@/components/card-inner-wrapper";
import { NextPage } from "next";
import ChatForm from "./chat-form";
import { getMessageThread } from "@/actions/messageAction";
import MessageBox from "./message-box";
import { getAuthUserId } from "@/actions/authAction";

interface Props {
  params: {
    userId: string;
  };
}

const ChatMemberPage: NextPage<Props> = async ({ params }: Props) => {
  const { userId } = params;
  const currentUserId = await getAuthUserId();
  const message = await getMessageThread(userId);

  const body = (
    <div>
      {message.length === 0 ? (
        "No messages to display"
      ) : (
        <div>
          {message.map((message) => (
            <MessageBox
              key={message.id}
              message={message}
              currentUserId={currentUserId}
            />
          ))}
        </div>
      )}
    </div>
  );

  return <CardInnerWrapper header="Chat" body={body} footer={<ChatForm />} />;
};

export default ChatMemberPage;
