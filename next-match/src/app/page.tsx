import { auth } from "@/auth";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import Link from "next/link";
import { GiMatchTip } from "react-icons/gi";

interface Props {}

const HomePage: NextPage<Props> = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-6 text-secondary">
      <GiMatchTip size={100} />
      <h1 className="text-4xl font-bold">Welcom to NextMatch</h1>
      {session ? (
        <Button
          as={Link}
          href="/members"
          size="lg"
          color="secondary"
          variant="bordered"
        >
          Continue
        </Button>
      ) : (
        <div className="flex flex-row gap-4">
          <Button
            as={Link}
            href="/login"
            size="lg"
            color="secondary"
            variant="bordered"
          >
            Sign in
          </Button>
          <Button
            as={Link}
            href="/register"
            size="lg"
            color="secondary"
            variant="bordered"
          >
            Register
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
