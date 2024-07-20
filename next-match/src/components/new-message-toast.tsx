import { transformImageUrl } from "@/lib/utils";
import { MessageDto } from "@/types";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";
import { toast } from "react-toastify";

interface Props {
  message: MessageDto;
}

const NewMessageToast: FC<Props> = ({ message }): JSX.Element => {
  return (
    <Link
      href={`/members/${message.senderId}/chat`}
      className="flex items-center"
    >
      <div className="mr-2">
        <Image
          src={transformImageUrl(message.senderImage) || "/images/user.png"}
          height={50}
          width={50}
          alt="sender image"
        />
      </div>
      <div className="flex flex-grow flex-col justify-center">
        <div className="font-semibold">
          {message.senderName} sent you a message
        </div>
        <div className="text-sm">Click to view</div>
      </div>
    </Link>
  );
};

export const newMessageToast = (message: MessageDto) => {
  toast(<NewMessageToast message={message} />);
};

export default NewMessageToast;
