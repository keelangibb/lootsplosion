import { api } from "~/utils/api";
import WeaponListCard from "./WeaponListCard";

export default function WeaponsCard() {
  const { data: weapons } = api.weapons.getAll.useQuery();

  if (!weapons) return <div>Loading</div>;
  console.log(weapons);
  return (
    <div className="m-4">
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th>Rarity</th>
              <th>Name</th>
              <th>Weapon Type</th>
              <th>Manufacturer</th>
              <th>Elements</th>
              <th>Content</th>
              <th>Sources</th>
            </tr>
          </thead>
          <tbody>
            {weapons.map((weapon) => (
              <WeaponListCard key={weapon.id} {...weapon} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
