import Image from "next/image";
import { type RouterOutputs } from "~/utils/api";
export type Weapon = RouterOutputs["weapons"]["getAll"][0];
export default function Elements(props: Weapon) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {props.ElementCombination.Elements.map((element) => (
        <Image
          key={element.name}
          src={element.picture}
          width={18}
          height={18}
          alt={element.name}
          className="h-auto w-auto"
        />
      ))}
    </div>
  );
}
