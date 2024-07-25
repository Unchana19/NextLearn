"use client";

import { resetPassword } from "@/actions/authAction";
import CardWrapper from "@/components/card-wrapper";
import ResultMessage from "@/components/result-message";
import {
  ResetPasswordSchema,
  resetPasswordSchema,
} from "@/lib/schemas/resetPasswordSchema";
import { ActionResult } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

interface Props {}

const ResetPasswordForm: FC<Props> = (props): JSX.Element => {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<ActionResult<string> | null>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ResetPasswordSchema>({
    mode: "onTouched",
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordSchema) => {
    setResult(await resetPassword(data.password, searchParams.get("token")));
    reset();
  };

  return (
    <CardWrapper
      headerIcon={GiPadlock}
      headerText="Reset password"
      subHeaderText="Enter your new password below"
      body={
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <Input
            type="password"
            placeholder="Password"
            variant="bordered"
            defaultValue=""
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message as string}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            variant="bordered"
            defaultValue=""
            {...register("confirmPassword")}
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message as string}
          />
          <Button
            type="submit"
            color="secondary"
            isLoading={isSubmitting}
            isDisabled={!isValid}
          >
            Reset password
          </Button>
        </form>
      }
      footer={<ResultMessage result={result!} />}
    />
  );
};

export default ResetPasswordForm;
