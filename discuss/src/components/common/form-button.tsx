import { Button } from "@nextui-org/react";
import { FC } from "react";
import { useFormStatus } from "react-dom";

interface Props {
  children: React.ReactNode;
}

const FormButton: FC<Props> = ({ children }: Props): JSX.Element => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
};

export default FormButton;
