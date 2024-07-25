"use client";

import { generateResetPasswordEmail } from "@/actions/authAction";
import CardWrapper from "@/components/card-wrapper";
import ResultMessage from "@/components/result-message";
import { ActionResult } from "@/types";
import { Button, Input } from "@nextui-org/react";
import { FC, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

interface Props {}

const ForgotPasswordForm: FC<Props> = (props): JSX.Element => {
  const [result, setResult] = useState<ActionResult<string> | null>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    setResult(await generateResetPasswordEmail(data.email));
    reset();
  };

  return (
    <CardWrapper
      headerIcon={GiPadlock}
      headerText="Forgot password"
      subHeaderText="Please enter your email address and we will sen you a link to reset your password"
      body={
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <Input
            type="email"
            placeholder="Email address"
            variant="bordered"
            defaultValue=""
            {...register("email", { required: true })}
          />
          <Button
            type="submit"
            color="secondary"
            isLoading={isSubmitting}
            isDisabled={!isValid}
          >
            Send reset email
          </Button>
        </form>
      }
      footer={<ResultMessage result={result!} />}
    />
  );
};

export default ForgotPasswordForm;
