"use client";

import { NextPage } from "next";
import { useSession } from "next-auth/react";

interface Props {}

const Profile: NextPage<Props> = () => {
  const session = useSession();

  if (session.data?.user) {
    return <div>Signed In {JSON.stringify(session)}</div>;
  }
  return <div>Not Signed In</div>;
};

export default Profile;
