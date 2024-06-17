import Hero from "@/components/hero";
import { NextPage } from "next";
import performanceImg from "/public/performance.jpg";

interface Props {}

const PerformancePage: NextPage<Props> = () => {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="welding"
        title="We serve high performance applications"
      />
    </div>
  );
};

export default PerformancePage;
