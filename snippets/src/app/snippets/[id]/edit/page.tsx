import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { NextPage } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const SnippetEditPage: NextPage<Props> = async ({ params }: Props) => {
  const id = parseInt(params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
