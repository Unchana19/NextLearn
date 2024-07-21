import { transformImageUrl } from "@/lib/utils";
import { MessageDto } from "@/types";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";
import { toast } from "react-toastify";

interface Props {
  link: string;
  image: string | null;
  content: string;
}

const NotificationToast: FC<Props> = ({
  link,
  image,
  content,
}: Props): JSX.Element => {
  return (
    <Link href={link} className="flex items-center">
      <div className="mr-2">
        <Image
          src={transformImageUrl(image) || "/images/user.png"}
          height={50}
          width={50}
          alt="sender image"
        />
      </div>
      <div className="flex flex-grow flex-col justify-center">
        <div className="font-semibold">{content}</div>
        <div className="text-sm">Click to view</div>
      </div>
    </Link>
  );
};

export const newMessageToast = (message: MessageDto) => {
  toast(
    <NotificationToast
      link={`/members/${message.senderId}/chat`}
      image={message.senderImage!}
      content={`${message.senderName} sent you a message`}
    />
  );
};

export const newLikeToast = (
  name: string,
  image: string | null,
  userId: string
) => {
  toast(
    <NotificationToast
      link={`/members/${userId}`}
      image={image}
      content={`${name} liked you`}
    />
  );
};

export default NotificationToast;
