import { getMemberByUserId } from "@/actions/memberAction";
import { FC, ReactNode } from "react";
import MemberSidebar from "../member-sidebar";
import { notFound } from "next/navigation";
import { Card } from "@nextui-org/react";

interface Props {
  children: ReactNode;
  params: { userId: string };
}

const Layout: FC<Props> = async ({
  children,
  params,
}: Props): Promise<JSX.Element> => {
  const { userId } = params;
  const member = await getMemberByUserId(userId);

  if (!member) return notFound();

  return (
    <div className="grid grid-cols-12 gap-5 h-[80vh]">
      <div className="col-span-3">
        <MemberSidebar member={member} />
      </div>
      <div className="col-span-9">
        <Card className="w-full mt-10 h-[80vh]">{children}</Card>
      </div>
    </div>
  );
};

export default Layout;
