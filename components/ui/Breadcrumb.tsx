import type { BreadcrumbList } from "apps/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Breadcrumb({ itemListElement = [] }: Props) {
  const items = [{ name: "Home", item: "/" }, ...itemListElement];

  return (
    <div class="mb-5 lg:mb-[45px]">
      <ul class="flex text-[#B4B4B4] text-[10px] font-medium leading-normal uppercase gap-[3px] justify-center lg:justify-start">
        {items
          .filter(({ name, item }) => name && item)
          .map(({ name, item }, index) => (
            <li>
              <a href={item} class="hover:underline">
                {name}
              </a>
              {index < items.length - 1 && " >"}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
