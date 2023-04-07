import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Elements from "~/components/Elements";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { api } from "~/utils/api";

const WeaponDetails: NextPage<{ weaponId: string }> = ({ weaponId }) => {
  const { data: weapon } = api.weapons.getById.useQuery({ weaponId: weaponId });
  console.log(weapon);
  if (!weapon) return <div>404</div>;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid place-content-center">
        <Image
          src={weapon.image}
          alt={weapon.name}
          width={240}
          height={240}
          className="h-auto w-auto"
        />
      </div>
      <div className="grid place-content-center">
        <h3>Borderlands 2</h3>
        <h1 className={`text-2xl font-bold ${weapon.rarity}`}>{weapon.name}</h1>
        <p className="text-red-500">{weapon.flavorText}</p>
        <div className="grid grid-cols-2">
          <p>Content</p>
          <p className="text-gray-400">{weapon.content.split("_").join(" ")}</p>
          <p>Manufacturer</p>
          <p className="text-gray-400">{weapon.manufacturer}</p>
          <p>Type</p>
          <p className="text-gray-400">{weapon.type}</p>
          <p>Rarity</p>
          <p className="text-gray-400">{weapon.rarity}</p>
          <p>Manufacturer</p>
          <p className={weapon.rarity}>{weapon.manufacturer}</p>
          <p>Elements</p>
          <Elements elements={weapon.elements} />
        </div>
      </div>
      <Image
        src={weapon.mapImage}
        alt={weapon.name}
        width={240}
        height={240}
        className="h-auto w-auto"
      />
    </div>
  );
};

export default WeaponDetails;

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
