import { getMemberPhotosByUserId } from "@/actions/memberAction";
import MemberPhoto from "@/components/member-photo";
import { CardHeader, Divider, CardBody, Image } from "@nextui-org/react";
import { NextPage } from "next";

interface Props {
  params: { userId: string };
}

const PhotosMemberPage: NextPage<Props> = async ({ params }: Props) => {
  const { userId } = params;
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Photos
      </CardHeader>
      <Divider />
      <CardBody>
        <MemberPhoto photos={photos!} />
      </CardBody>
    </>
  );
};

export default PhotosMemberPage;
