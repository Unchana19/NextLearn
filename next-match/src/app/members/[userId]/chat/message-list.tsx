"use client";

import { MessageDto } from "@/types";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import MessageBox from "./message-box";
import { pusherClient } from "@/lib/pusher";
import { formatShortDateTime } from "@/lib/utils";
import { Channel } from "pusher-js";

interface Props {
  initialMessages: MessageDto[];
  currentUserId: string;
  chatId: string;
}

const MessageList: FC<Props> = ({
  initialMessages,
  currentUserId,
  chatId,
}: Props): JSX.Element => {
  const channelRef = useRef<Channel | null>(null);
  const [message, setMessages] = useState(initialMessages);

  const handleNewMessage = useCallback((message: MessageDto) => {
    setMessages((prevState) => {
      return [...prevState, message];
    });
  }, []);

  const handleReadMessages = useCallback((messageIds: string[]) => {
    setMessages((prevState) =>
      prevState.map((message) =>
        messageIds.includes(message.id)
          ? { ...message, dateRead: formatShortDateTime(new Date()) }
          : message
      )
    );
  }, []);

  useEffect(() => {
    if (!channelRef.current) {
      channelRef.current = pusherClient.subscribe(chatId);

      channelRef.current.bind("message:new", handleNewMessage);
      channelRef.current.bind("message:read", handleReadMessages);
    }

    return () => {
      if (channelRef.current && channelRef.current.subscribed) {
        channelRef.current.unsubscribe();
        channelRef.current.unbind("message:new", handleNewMessage);
        channelRef.current.unbind("message:read", handleReadMessages);
      }
    };
  }, [chatId, handleNewMessage, handleReadMessages]);

  return (
    <div>
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
    </div>
  );
};

export default MessageList;
