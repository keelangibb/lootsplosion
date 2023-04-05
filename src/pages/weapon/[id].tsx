import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { api } from "~/utils/api";

const WeaponsPage: NextPage<{ weaponId: string }> = ({ weaponId }) => {
  const { data: weapon } = api.weapons.getById.useQuery({ weaponId: weaponId });
  console.log(weapon);
  if (!weapon) return <div>404</div>;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid place-content-center">
        <Image
          src={weapon.picture}
          alt={weapon.name}
          width={240}
          height={240}
          className="h-auto w-auto"
        />
      </div>
      <div className="grid place-content-center">
        <h3>Borderlands 2</h3>
        <h1 className={`text-2xl font-bold ${weapon.rarityName}`}>
          {weapon.name}
        </h1>
        <p className="text-red-500">{weapon.flavorText}</p>
        <div className="grid grid-cols-2">
          <p>Content</p>
          <p className="text-gray-400">{weapon.contentName}</p>
          <p>Manufacturer</p>
          <p className="text-gray-400">{weapon.manufacturerName}</p>
          <p>Type</p>
          <p className="text-gray-400">{weapon.contentName}</p>
          <p>Rarity</p>
          <p className="text-gray-400">{weapon.typeName}</p>
          <p>Manufacturer</p>
          <p className={weapon.rarityName}>{weapon.rarityName}</p>
          <p>Content</p>
          <p className="text-gray-400">{weapon.manufacturerName}</p>
        </div>
      </div>
      <Image
        src={weapon.picture2}
        alt={weapon.name}
        width={240}
        height={240}
        className="h-auto w-auto"
      />
    </div>
  );
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

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
