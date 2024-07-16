import { CardHeader, Divider, CardBody, CardFooter } from "@nextui-org/react";
import { FC, ReactNode } from "react";

interface Props {
  header: ReactNode | string;
  body: ReactNode;
  footer?: ReactNode;
}

const CardInnerWrapper: FC<Props> = ({
  header,
  body,
  footer,
}: Props): JSX.Element => {
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        {typeof header === "string" ? (
          <div className="text-2xl font-semibold text-secondary">{header}</div>
        ) : (
          <>{header}</>
        )}
        Chat
      </CardHeader>
      <Divider />
      <CardBody>{body}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </>
  );
};

export default CardInnerWrapper;
