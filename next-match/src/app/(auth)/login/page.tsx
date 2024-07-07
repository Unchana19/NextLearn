import { NextPage } from "next";
import LoginForm from "./login-form";

interface Props {}

const LoginPage: NextPage<Props> = () => {
  return (
    <div
      className="flex items-center justify-center align-middle w-full vertical-center"
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
