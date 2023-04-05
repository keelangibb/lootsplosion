import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import Elements from "./Elements";
export default function WeaponListCard() {
  const { data: weapons } = api.weapons.getAll.useQuery();
  const { data: elements } = api.elements.getAll.useQuery();

  if (!weapons || !elements) return null;
  return (
    <div className="mt-4">
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
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
            {weapons.map((weapon, i) => (
              <tr key={weapon.id} className="hover text-center">
                <th>{i + 1}</th>
                <td>
                  <Image
                    key={weapon.id}
                    src={weapon.picture}
                    width={72}
                    height={72}
                    alt={weapon.name}
                    loading="lazy"
                    className="h-auto w-auto"
                  />
                </td>
                <td>
                  <Link
                    className={`btn ${weapon.rarityName}`}
                    href={`weapon/${weapon.id}`}
                  >
                    {weapon.name}
                  </Link>
                </td>
                <td>{weapon.typeName}</td>
                <td>{weapon.manufacturerName}</td>
                <td>
                  <Elements elements={weapon.Elements} />
                </td>
                <td>{weapon.contentName}</td>
                <td>
                  {weapon.Sources.map((source) => (
                    <Link
                      key={source.id}
                      href={`source/${source.id}`}
                      className="btn mx-1"
                    >
                      {source.name}
                    </Link>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
