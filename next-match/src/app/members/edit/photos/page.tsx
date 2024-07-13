import { getAuthUserId } from "@/actions/authAction";
import { getMemberPhotosByUserId } from "@/actions/memberAction";
import { CardHeader, Divider, CardBody, Image } from "@nextui-org/react";
import { NextPage } from "next";

interface Props {}

const PhotosPage: NextPage<Props> = async () => {
  const userId = await getAuthUserId();

  const photos = await getMemberPhotosByUserId(userId);

  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Edit Profile
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-5 gap-3 p-5">
          {photos &&
            photos.map((photo) => (
              <div key={photo.id} className="relative">
                {
                  <Image
                    width={220}
                    height={220}
                    src={photo.url}
                    alt="Image of user"
                  />
                }
              </div>
            ))}
        </div>
      </CardBody>
    </>
  );
};

export default PhotosPage;
