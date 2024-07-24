import { verifyEmail } from "@/actions/authAction";
import CardWrapper from "@/components/card-wrapper";
import ResultMessage from "@/components/result-message";
import { Spinner } from "@nextui-org/react";
import { NextPage } from "next";
import { MdOutlineMailOutline } from "react-icons/md";

interface Props {
  searchParams: {
    token: string;
  };
}

const VerifyEmailPage: NextPage<Props> = async ({ searchParams }: Props) => {
  const result = await verifyEmail(searchParams.token);

  return (
    <CardWrapper
      headerText="Verifying your email address"
      headerIcon={MdOutlineMailOutline}
      body={
        <div className="flex flex-col space-y-4 items-center">
          <p>Verifying your email address. Please wait...</p>
          {!result && <Spinner color="secondary" />}
        </div>
      }
      footer={<ResultMessage result={result} />}
    />
  );
};

export default VerifyEmailPage;
