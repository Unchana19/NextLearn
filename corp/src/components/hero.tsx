import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

const Hero: FC<Props> = ({ imgData, imgAlt, title }: Props): JSX.Element => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image src={imgData} fill alt={imgAlt} style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl text-center">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
