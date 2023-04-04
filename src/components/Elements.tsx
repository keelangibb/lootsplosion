import Image from "next/image";
import { api } from "~/utils/api";

type ElementsList = { name: string }[];
export default function Elements({ elements }: { elements: ElementsList }) {
  const { data } = api.elements.getAll.useQuery();
  if (!data) return null;

  return (
    <div className="grid grid-cols-3 gap-2">
      {elements.map((element, i) => (
        <Image
          key={element.name}
          src={data[i]?.picture ?? ""}
          width={18}
          height={18}
          alt={element.name}
          className="h-auto w-auto"
        />
      ))}
    </div>
  );
}
