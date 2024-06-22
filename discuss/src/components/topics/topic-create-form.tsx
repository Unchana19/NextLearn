import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { FC } from "react";
import * as action from "@/actions";

interface Props {}

const TopicCreateForm: FC<Props> = (props): JSX.Element => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action.createTopic}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Craete a Topoic</h3>
            <Input label="Name" labelPlacement="outside" placeholder="Name" />
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
