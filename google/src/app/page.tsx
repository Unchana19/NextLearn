import HomeHeader from "@/components/home-header";
import HomeSearch from "@/components/home-search";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const HomePage: NextPage<Props> = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src={"/google-icon.png"}
          width={300}
          height={80}
          alt="google logo"
          priority
          style={{ width: "auto" }}
        ></Image>
        <HomeSearch />
      </div>
    </>
  );
};

export default HomePage;
