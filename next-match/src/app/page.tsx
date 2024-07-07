import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

interface Props {}

const HomePage: NextPage<Props> = () => {
  return (
    <div>
      <h1 className="text-3xl">Hello</h1>
      <Button
        as={Link}
        href="/members"
        color="primary"
        variant="bordered"
        startContent={<FaRegSmile size={20} />}
      >
        Click me
      </Button>
    </div>
  );
};

export default HomePage;
