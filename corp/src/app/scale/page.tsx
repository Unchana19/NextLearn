import Hero from "@/components/hero";
import { NextPage } from "next";
import scaleImg from "/public/scale.jpg";

interface Props {}

const ScalePage: NextPage<Props> = () => {
  return (
    <div>
      <Hero
        imgData={scaleImg}
        imgAlt="steel factory"
        title="Scale your app to infinity"
      />
    </div>
  );
};

export default ScalePage;
