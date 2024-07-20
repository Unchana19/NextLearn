import usePresenceStore from "@/hooks/usePresenceStore";
import { Avatar, Badge } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  userId?: string;
  src?: string | null;
}

const PresenceAvatar: FC<Props> = ({ userId, src }: Props): JSX.Element => {
  const { members } = usePresenceStore((state) => ({
    members: state.members,
  }));

  const isOnline = userId && members.indexOf(userId) !== -1;

  return (
    <Badge content="" color="success" shape="circle" isInvisible={!isOnline}>
      <Avatar src={src || "/images/user.png"} />
    </Badge>
  );
};

export default PresenceAvatar;
