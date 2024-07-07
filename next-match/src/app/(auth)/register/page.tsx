import { NextPage } from "next";
import RegisterForm from "./register-form";

interface Props {}

const RegisterPage: NextPage<Props> = () => {
  return (
    <div className="flex items-center justify-center align-middle w-full vertical-center">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
