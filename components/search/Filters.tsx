import Avatar from "$store/components/ui/Avatar.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import type {
  Filter,
  FilterToggle,
  FilterToggleValue,
  ProductListingPage,
} from "apps/commerce/types.ts";
import { parseRange } from "apps/commerce/utils/filters.ts";

export interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function ValueItem({ url, selected, label, quantity }: FilterToggleValue) {
  return (
    <a href={url} rel="nofollow" class="flex items-center gap-2">
      <div aria-checked={selected} class="checkbox" />
      <span class="text-[#444] text-base leading-[30px]">{label}</span>
      {quantity > 0 && <span class="text-sm text-base-300">({quantity})</span>}
    </a>
  );
}

function SelectedFilter({ key, values }: FilterToggle) {
  return (
    <ul class="flex flex-col gap-[18px]">
      {values
        .filter((value) => value.selected)
        .map((item) => {
          const { url, selected, value, quantity } = item;

          if (key === "price") {
            const range = parseRange(item.value);

            return (
              range && (
                <ValueItem
                  {...item}
                  label={`${formatPrice(range.from)} - ${
                    formatPrice(
                      range.to,
                    )
                  }`}
                />
              )
            );
          }

          return <ValueItem {...item} />;
        })}
    </ul>
  );
}

function FilterValues({ key, values }: FilterToggle) {
  return (
    <ul class="flex flex-col gap-[18px]">
      {values.map((item) => {
        const { url, selected, value, quantity } = item;

        if (key === "price") {
          const range = parseRange(item.value);

          return (
            range && (
              <ValueItem
                {...item}
                label={`${formatPrice(range.from)} - ${formatPrice(range.to)}`}
              />
            )
          );
        }

        return <ValueItem {...item} />;
      })}
    </ul>
  );
}

function Filters({ filters }: Props) {
  return (
    <div>
      <p class="text-[#2E385F] text-xl font-extrabold leading-normal mb-[17px]">
        FILTROS
      </p>
      <div class="bg-[#F0F0F0] pt-[13px] pb-[26px] px-3 rounded-lg mb-[17px]">
        <p class="text-[#6A6A6A] text-sm font-extrabold leading-normal mb-[26px]">
          Filtrado por:
        </p>
        <ul className="flex flex-col">
          {filters.filter(isToggle).map((filter) => (
            <li className="flex flex-col" key={filter.key}>
              <SelectedFilter {...filter} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul class="flex flex-col">
          {filters.filter(isToggle).map((filter) => (
            <li class="flex flex-col">
              <span class="text-[#6A6A6A] text-base font-extrabold leading-normal mb-3">
                {filter.label}
              </span>
              <FilterValues {...filter} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filters;
