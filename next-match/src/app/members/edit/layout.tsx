import { getMemberByUserId } from "@/actions/memberAction";
import { FC, ReactNode } from "react";
import MemberSidebar from "../member-sidebar";
import { notFound } from "next/navigation";
import { Card } from "@nextui-org/react";
import { getAuthUserId } from "@/actions/authAction";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = async ({ children }: Props): Promise<JSX.Element> => {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);

  if (!member) return notFound();

  const basePath = "/members/edit";

  const navLinks = [
    {
      name: "Edit Profile",
      href: `${basePath}`,
    },
    {
      name: "Update Photos",
      href: `${basePath}/photos`,
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-5 h-[80vh]">
      <div className="col-span-3">
        <MemberSidebar member={member} navLinks={navLinks} />
      </div>
      <div className="col-span-9">
        <Card className="w-full mt-10 h-[80vh]">{children}</Card>
      </div>
    </div>
  );
};

export default Layout;
