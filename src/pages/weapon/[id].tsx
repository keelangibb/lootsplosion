import type { GetStaticProps, NextPage } from "next";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { api } from "~/utils/api";

const WeaponsPage: NextPage<{ weaponId: string }> = ({ weaponId }) => {
  const { data: weapon } = api.weapons.getById.useQuery({ weaponId: weaponId });
  console.log(weapon);
  if (!weapon) return <div>404</div>;

  return <div></div>;
};

export default WeaponsPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const weaponId = context.params?.id;

  if (typeof weaponId !== "string") throw new Error("no weaponId");

  await ssg.weapons.getById.prefetch({ weaponId });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      weaponId,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
