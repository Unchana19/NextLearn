import { calculateAge } from "@/lib/utils";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Member } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";

interface Props {
  member: Member;
}

const MemberCard: FC<Props> = ({ member }: Props): JSX.Element => {
  return (
    <Card
      fullWidth
      as={Link}
      href={`/members/${member.userId}`}
      isPressable
      className="max-w-[300px] mx-auto"
    >
      <Image
        isZoomed
        alt={member.name}
        width={300}
        src={member.image || "/images/user.png"}
        className="aspect-square object-cover"
      />
      <CardFooter className="flex justify-start bg-black overflow-hidden absolute bottom-0 z-10 bg-dark-gradient">
        <div className="flex flex-col text-white">
          <span className="font-semibold">
            {member.name}, {calculateAge(member.dateOfBirth)}
          </span>
          <span className="text-sm">{member.city}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
