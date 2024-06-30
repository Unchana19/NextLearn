"use client";

import { FC } from "react";
import * as actions from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../common/form-button";
import { useFormState } from "react-dom";

interface Props {
  slug: string;
}

const PostCreateForm: FC<Props> = ({ slug }: Props): JSX.Element => {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Craete a Post</h3>
            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
            />
            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
            />

            {formState.errors._form ? (
              <div className="rounded-lg p-2 bg-red-200 border border-red-400">
                {formState.errors._form.join(", ")}
              </div>
            ) : null}

            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
