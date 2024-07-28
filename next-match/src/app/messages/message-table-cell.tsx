import AppModal from "@/components/app-modal";
import PresenceAvatar from "@/components/presence-avatar";
import { truncateString } from "@/lib/utils";
import { MessageDto } from "@/types";
import { Button, ButtonProps, useDisclosure } from "@nextui-org/react";
import { FC } from "react";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  item: MessageDto;
  columnKey: string;
  isOutbox: boolean;
  deleteMessage: (message: MessageDto) => void;
  isDeleting: boolean;
}

const MessageTableCell: FC<Props> = ({
  item,
  columnKey,
  isOutbox,
  deleteMessage,
  isDeleting,
}: Props): JSX.Element | string | null | undefined => {
  const cellValue = item[columnKey as keyof MessageDto];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onConfirmDeleteMessage = () => {
    deleteMessage(item);
  };

  const footerButtons: ButtonProps[] = [
    {
      color: "default",
      variant: "bordered",
      onClick: onClose,
      children: <div className="text-danger">Cancel</div>,
    },
    {
      color: "secondary",
      onClick: onConfirmDeleteMessage,
      children: "Confirm",
    },
  ];

  switch (columnKey) {
    case "recipientName":
    case "senderName":
      return (
        <div className="flex items-center gap-2 cursor-pointer">
          <PresenceAvatar
            userId={isOutbox ? item.recipientId : item.senderId}
            src={isOutbox ? item.recipientImage : item.senderImage}
          />
          <span>{cellValue}</span>
        </div>
      );
    case "text":
      return <div>{truncateString(cellValue, 30)}</div>;
    case "created":
      return <div>{cellValue}</div>;
    default:
      return (
        <>
          <Button
            isIconOnly
            variant="light"
            onClick={() => onOpen()}
            isLoading={isDeleting}
          >
            <AiFillDelete size={24} className="text-danger" />
          </Button>
          <AppModal
            isOpen={isOpen}
            onClose={onClose}
            header="Confirm to delete this messages"
            body={
              <div>
                Are you sure you want to delete this message? This cannot be
                undone.
              </div>
            }
            footerButtons={footerButtons}
          />
        </>
      );
  }
};

export default MessageTableCell;
