import Hero from "@/components/hero";
import { NextPage } from "next";
import reliabilityImg from "/public/reliability.jpg";

interface Props {}

const ReliabilityPage: NextPage<Props> = () => {
  return (
    <div>
      <Hero
        imgData={reliabilityImg}
        imgAlt="welding"
        title="Super high reliability hosting"
      />
    </div>
  );
};

export default ReliabilityPage;
