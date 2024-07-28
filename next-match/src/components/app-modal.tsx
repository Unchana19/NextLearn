import { FC, ReactNode } from "react";
import {
  Modal,
  ButtonProps,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  body: ReactNode;
  footerButtons?: ButtonProps[];
  imageModal?: boolean;
}

const AppModal: FC<Props> = ({
  isOpen,
  onClose,
  header,
  body,
  footerButtons,
  imageModal,
}: Props): JSX.Element => {
  const handleClose = () => {
    setTimeout(() => onClose(), 10);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      placement="top-center"
      classNames={{
        base: `${imageModal ? "border-2 border-white" : ""}`,
        body: `${imageModal ? "p-0" : ""}`,
      }}
      motionProps={{
        variants: {
          enter: { y: 0, opacity: 100, transition: { duration: 0.2 } },
          exit: { y: 100, opacity: 0, transition: { duration: 0.2 } },
        },
      }}
    >
      <ModalContent>
        {!imageModal && (
          <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
        )}
        <ModalBody>{body}</ModalBody>
        {!imageModal && (
          <ModalFooter>
            {footerButtons &&
              footerButtons.map((props: ButtonProps, index) => (
                <Button {...props} key={index}>
                  {props.children}
                </Button>
              ))}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AppModal;
