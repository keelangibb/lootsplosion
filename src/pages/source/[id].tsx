import type { GetStaticProps, NextPage } from "next";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { api } from "~/utils/api";

const SourcePage: NextPage<{ sourceId: string }> = ({ sourceId }) => {
  const { data: weapon } = api.sources.getById.useQuery({ sourceId: sourceId });
  console.log(weapon);
  if (!weapon) return <div>404</div>;

  return <div></div>;
};

export default SourcePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const sourceId = context.params?.id;

  if (typeof sourceId !== "string") throw new Error("no sourceId");

  await ssg.sources.getById.prefetch({ sourceId });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      sourceId,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
