"use client";

import { createMessage } from "@/actions/messageAction";
import { messageSchema, MessageSchema } from "@/lib/schemas/messageSchema";
import { handleFormServerErrors } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { NextPage } from "next";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { HiPaperAirplane } from "react-icons/hi2";

interface Props {}

const ChatForm: NextPage<Props> = () => {
  const router = useRouter();
  const params = useParams<{ userId: string }>();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setFocus,
    formState: { isSubmitting, isValid, errors },
  } = useForm<MessageSchema>({ resolver: zodResolver(messageSchema) });

  useEffect(() => {
    setFocus("text");
  });

  const onSubmit = async (data: MessageSchema) => {
    const result = await createMessage(params.userId, data);
    if (result.status === "error") {
      handleFormServerErrors(result, setError);
    } else {
      reset();
      setTimeout(() => setFocus("text"), 50);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex items-center gap-2">
        <Input
          fullWidth
          placeholder="Type a message"
          variant="faded"
          {...register("text")}
          isInvalid={!!errors.text}
          errorMessage={errors.text?.message}
        />
        <Button
          type="submit"
          isIconOnly
          color="secondary"
          radius="full"
          isLoading={isSubmitting}
          isDisabled={!isValid || isSubmitting}
        >
          <HiPaperAirplane size={18} />
        </Button>
      </div>
      <div className="flex flex-col">
        {errors.root?.serverError && (
          <p className="text-danger text-sm">
            {errors.root.serverError.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default ChatForm;
