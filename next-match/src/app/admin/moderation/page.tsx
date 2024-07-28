import { getUnapprovePhotos } from "@/actions/adminAction";
import MemberPhoto from "@/components/member-photo";
import { Divider } from "@nextui-org/react";
import { NextPage } from "next";

export const dynamic = "force-dynamic";

interface Props {}

const PhotoModerationPage: NextPage<Props> = async () => {
  const photos = await getUnapprovePhotos();

  return (
    <div className="flex flex-col mt-10 gap-3">
      <h3 className="text-2xl">Photos awaiting moderation</h3>
      <Divider />
      <MemberPhoto photos={photos} />
    </div>
  );
};

export default PhotoModerationPage;
