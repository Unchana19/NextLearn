import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

interface Props {}

const HomePage: NextPage<Props> = async () => {
  const session = await auth();

  return (
    <div>
      <h1 className="text-3xl">Hello</h1>

      <h3 className="text-2xl font-semibold">User session data: </h3>
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
            <Button
              type="submit"
              color="primary"
              variant="bordered"
              startContent={<FaRegSmile size={20} />}
            >
              Sign Out
            </Button>
          </form>
        </div>
      ) : (
        <div>Not Signed In</div>
      )}
    </div>
  );
};

export default HomePage;
