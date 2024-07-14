import { getAuthUserId } from "@/actions/authAction";
import {
  getMemberByUserId,
  getMemberPhotosByUserId,
} from "@/actions/memberAction";
import { CardHeader, Divider, CardBody } from "@nextui-org/react";
import { NextPage } from "next";
import MemberPhotoUpload from "./member-photo-upload";
import MemberPhoto from "@/components/member-photo";
import { Photo } from "@prisma/client";

interface Props {}

const PhotosPage: NextPage<Props> = async () => {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);

  const photos = (await getMemberPhotosByUserId(userId)) as Photo[];

  return (
    <>
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="text-2xl font-semibold text-secondary">
          Edit Profile
        </div>
        <MemberPhotoUpload />
      </CardHeader>
      <Divider />
      <CardBody>
        <MemberPhoto
          photos={photos}
          editing={true}
          mainImageUrl={member?.image}
        />
      </CardBody>
    </>
  );
};

export default PhotosPage;
