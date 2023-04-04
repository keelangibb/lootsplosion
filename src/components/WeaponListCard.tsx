import Image from "next/image";
import Link from "next/link";
import type { RouterOutputs } from "~/utils/api";
import Elements from "./Elements";
type Weapon = RouterOutputs["weapons"]["getAll"][0];
export default function WeaponListCard(props: Weapon) {
  return (
    <tr className="hover text-center">
      <td>
        <Image
          key={props.id}
          src={props.picture}
          width={72}
          height={72}
          alt={props.name}
          loading="lazy"
          className="h-auto w-auto"
        />
      </td>
      <td>
        <Link className={`btn ${props.rarityName}`} href={`weapon/${props.id}`}>
          {props.name}
        </Link>
      </td>
      <td>{props.typeName}</td>
      <td>{props.manufacturerName}</td>
      <td>
        <Elements elements={props.Elements} />
      </td>
      <td>{props.contentName}</td>
      <td>
        <div className={`grid grid-cols-${props.Sources.length} gap-2`}>
          {props.Sources.map((source) => (
            <button key={source.id} className="btn">
              {source.name}
            </button>
          ))}
        </div>
      </td>
    </tr>
  );
}
