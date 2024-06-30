import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const TopicList: FC<Props> = async (props): Promise<JSX.Element> => {
  const topics = await db.topic.findMany();

  const rederedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });
  return <div className="flex flex-row flex-wrap gap-2">{rederedTopics}</div>;
};

export default TopicList;
