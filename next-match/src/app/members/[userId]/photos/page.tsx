import { getMemberPhotosByUserId } from "@/actions/memberAction";
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
        <div className="grid grid-cols-5 gap-3">
          {photos &&
            photos.map((photo) => (
              <div key={photo.id}>
                <Image
                  width={300}
                  height={300}
                  src={photo.url}
                  alt="Image of member"
                  className="object-cover aspect-square"
                />
              </div>
            ))}
        </div>
      </CardBody>
    </>
  );
};

export default PhotosMemberPage;
