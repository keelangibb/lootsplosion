import Image from "next/image";
import { api } from "~/utils/api";

export default function WeaponsCard() {
  const { data: weapons } = api.weapons.getAll.useQuery();
  const { data: rarity } = api.weapons.getRarity.useQuery();
  console.log(rarity);
  if (!weapons) return <div>Loading</div>;
  console.log(weapons);
  return (
    <div>
      {weapons.map((weapon) => (
        <div key={weapon.id} className="flex items-center justify-center gap-4">
          <Image
            key={weapon.id}
            src={weapon.picture}
            width={56}
            height={56}
            alt={weapon.name}
          />
          <div className={weapon.rarityName}>{weapon.name}</div>
          <div>{weapon.typeName}</div>
          <div>{weapon.manufacturerName}</div>
          <div>{weapon.contentName}</div>

          {/* {weapon.elementCombination.elements.map((element) => (
            <Image
              key={element.name}
              src={element.picture}
              width={20}
              height={20}
              alt={element.name}
            />
          ))} */}
        </div>
      ))}
    </div>
  );
}
