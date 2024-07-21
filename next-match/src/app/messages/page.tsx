import { NextPage } from "next";
import MessageSidebar from "./message-sidebar";
import { getMessagesByContainer } from "@/actions/messageAction";
import MessageTable from "./message-table";

interface Props {
  searchParams: {
    container: string;
  };
}

const MessagesPage: NextPage<Props> = async ({ searchParams }: Props) => {
  const { container } = searchParams;
  const { messages, nextCursor } = await getMessagesByContainer(container);

  return (
    <div className="grid grid-cols-12 gap-5 h-[80vh] mt-10">
      <div className="col-span-2">
        <MessageSidebar />
      </div>
      <div className="col-span-10">
        <MessageTable initialMessages={messages} nextCursor={nextCursor} />
      </div>
    </div>
  );
};

export default MessagesPage;
