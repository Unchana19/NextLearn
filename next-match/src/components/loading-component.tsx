import { Spinner } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  label?: string;
}

const LoadingComponent: FC<Props> = ({ label }: Props): JSX.Element => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <Spinner
        label={label || "Loading..."}
        color="secondary"
        labelColor="secondary"
      />
    </div>
  );
};

export default LoadingComponent;
