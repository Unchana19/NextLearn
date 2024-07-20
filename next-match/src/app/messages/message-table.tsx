"use client";

import { MessageDto } from "@/types";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { FC } from "react";
import MessageTableCell from "./message-table-cell";
import { useMessages } from "@/hooks/useMessages";

interface Props {
  initialMessages: MessageDto[];
}

const MessageTable: FC<Props> = ({ initialMessages }: Props): JSX.Element => {
  const { columns, isOutbox, isDeleting, deleteMessage, selectRow, messages } =
    useMessages(initialMessages);

  return (
    <Card className="flex flex-col gap-3 h-[80vh] overflow-auto">
      <Table
        aria-label="Table with messages"
        selectionMode="single"
        onRowAction={(key) => selectRow(key)}
        shadow="none"
      >
        <TableHeader columns={columns}>
          {(columns) => (
            <TableColumn
              key={columns.key}
              width={columns.key === "text" ? "50%" : undefined}
            >
              {columns.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={messages}
          emptyContent="No messages for this container"
        >
          {(item) => (
            <TableRow key={item.id} className="cursor-pointer">
              {(columnKey) => (
                <TableCell
                  className={`${
                    !item.dateRead && !isOutbox ? "font-semibold" : ""
                  }`}
                >
                  <MessageTableCell
                    item={item}
                    columnKey={columnKey as string}
                    isOutbox={isOutbox}
                    deleteMessage={deleteMessage}
                    isDeleting={isDeleting.loading && isDeleting.id === item.id}
                  />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default MessageTable;
