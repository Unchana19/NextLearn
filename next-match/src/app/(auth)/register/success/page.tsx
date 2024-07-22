"use client";

import CardWrapper from "@/components/card-wrapper";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

interface Props {}

const SuccessRegisterPage: NextPage<Props> = () => {
  const router = useRouter();

  return (
    <CardWrapper
      headerText="You have successfully registered"
      subHeaderText="You can now login to the app"
      action={() => router.push("/login")}
      actionLabel="Go to Login"
      headerIcon={FaCheckCircle}
    />
  );
};

export default SuccessRegisterPage;
