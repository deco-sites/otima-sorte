import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Drawer from "$store/components/ui/Drawer.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "apps/commerce/types.ts";

export type Props =
  & Pick<
    ProductListingPage,
    "filters" | "breadcrumb" | "sortOptions"
  >
  & {
    displayFilter?: boolean;
  };

function SearchControls({
  filters,
  breadcrumb,
  displayFilter,
  sortOptions,
}: Props) {
  const open = useSignal(false);

  return (
    <Drawer
      loading="lazy"
      open={open.value}
      onClose={() => (open.value = false)}
      aside={
        <div class="bg-white flex flex-col h-full divide-y overflow-y-hidden w-[calc(100vw-20px)] max-w-[340px] px-[15px]">
          <div class="flex justify-between items-center">
            <h1 class="px-4 py-3">
              <span class="font-medium text-2xl">Filtrar</span>
            </h1>
            <Button class="btn btn-ghost" onClick={() => (open.value = false)}>
              <Icon id="XMark" size={24} strokeWidth={2} />
            </Button>
          </div>
          <div class="flex-grow overflow-auto">
            <Filters filters={filters} />
          </div>
        </div>
      }
    >
      <div class="flex flex-col justify-between mb-5">
        <div class="flex flex-row items-center justify-between sm:gap-4 sm:border-none">
          <button
            class="flex items-center h-[45px] w-[155px] pl-[17px] gap-2 border border-[#2E385F] rounded-lg"
            onClick={() => {
              open.value = true;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="19"
              viewBox="0 0 28 19"
              fill="none"
            >
              <path
                d="M1.71729 4.87158H26.8433"
                stroke="#2E385F"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1.71729 14.4429H26.8433"
                stroke="#2E385F"
                stroke-width="2"
                stroke-linecap="round"
              />
              <circle cx="8.2354" cy="4.87163" r="4.1729" fill="#2E385F" />
              <circle cx="20.6463" cy="14.1285" r="4.26299" fill="#2E385F" />
            </svg>
            <span class="text-[#2E385F] text-[15px] font-bold leading-normal">
              Filtrar
            </span>
          </button>
          {sortOptions.length > 0 && <Sort sortOptions={sortOptions} />}
        </div>
      </div>
    </Drawer>
  );
}

export default SearchControls;
