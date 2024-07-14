"use client";

import { addImage } from "@/actions/userActions";
import ImageUploadButton from "@/components/image-upload-button";
import { CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { toast } from "react-toastify";

interface Props {}

const MemberPhotoUpload: FC<Props> = (props): JSX.Element => {
  const router = useRouter();

  const onAddImage = async (result: CloudinaryUploadWidgetResults) => {
    if (result.info && typeof result.info === "object") {
      await addImage(result.info.secure_url, result.info.public_id);
      router.refresh();
    } else {
      toast.error("Problem adding image");
    }
  };

  return (
    <div className="">
      <ImageUploadButton onUploadImage={onAddImage} />
    </div>
  );
};

export default MemberPhotoUpload;
