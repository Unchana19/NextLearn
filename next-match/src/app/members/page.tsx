import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const MembersPage: NextPage<Props> = () => {
  return (
    <div>
      <h3 className="text-3xl">This will be the members page</h3>
      <Link href={"/"}>Go back home</Link>
    </div>
  );
};

export default MembersPage;
