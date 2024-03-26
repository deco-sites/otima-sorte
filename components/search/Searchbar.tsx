/**
 * We use a custom route at /s?q= to perform the search. This component
 * redirects the user to /s?q={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */

import { sendEvent } from "$store/sdk/analytics.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useUI } from "$store/sdk/useUI.ts";
import { Suggestion } from "apps/commerce/types.ts";
import { Resolved } from "deco/engine/core/resolver.ts";
import { useEffect, useRef } from "preact/compat";
import type { Platform } from "$store/apps/site.ts";
import SearchPreview from "$store/islands/SearchPreview.tsx";
import { signal } from "@preact/signals";

// Editable props
export interface Props {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /**
   * @title Page path
   * @description When user clicks on the search button, navigate it to
   * @default /s
   */
  action?: string;
  /**
   * @title Term name
   * @description Querystring param used when navigating the user
   * @default q
   */
  name?: string;

  /**
   * @title Suggestions Integration
   * @todo: improve this typings ({query: string, count: number}) => Suggestions
   */
  loader: Resolved<Suggestion | null>;

  platform?: Platform;
}

function Searchbar({
  placeholder = "Busque seus produtos aqui",
  action = "/s",
  name = "q",
  loader,
  platform,
}: Props) {
  const id = useId();
  const { displaySearchPopup } = useUI();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const query = signal("");

  useEffect(() => {
    if (displaySearchPopup.value === true) {
      searchInputRef.current?.focus();
    }
  }, [displaySearchPopup.value]);

  return (
    <div class="w-full max-w-[1270px] mx-auto">
      <form id={id} action={action}>
        <div class="flex">
          <input
            ref={searchInputRef}
            id="search-input"
            class="flex-grow px-[16px] focus:outline-none text-[#868686] text-[15px] leading-normal"
            name={name}
            onInput={(e) => {
              const value = e.currentTarget.value;

              if (value) {
                sendEvent({
                  name: "search",
                  params: { search_term: value },
                });
              }

              query.value = value;
            }}
            placeholder={placeholder}
            role="combobox"
            aria-controls="search-suggestion"
            autocomplete="off"
          />
          <button
            type="button"
            class="bg-white w-[46px] h-[46px] flex items-center justify-center"
            onClick={() => (displaySearchPopup.value = false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M20.345 5.23132L5.25879 20.3175"
                stroke="#9DA6BA"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.25879 5.23132L20.345 20.3175"
                stroke="#9DA6BA"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="bg-white flex flex-col lg:flex-row pt-[29px] pb-[38px] pl-[37px] pr-[26px] border-t border-[#9DA6BA] lg:gap-x-[150px]">
          <div class="mb-10 lg:mb-0">
            <h1 class="mb-[21px] text-[15px] leading-[18px] font-semibold text-[#868686]">
              COLEÇÕES
            </h1>
            <ul class="flex flex-col gap-[14px] lg:mb-[33px]">
              <li class="text-[13px] leading-[15px] text-[#868686]">
                Coleção exemplo
              </li>
              <li class="text-[13px] leading-[15px] text-[#868686]">
                Coleção exemplo
              </li>
              <li class="text-[13px] leading-[15px] text-[#868686]">
                Coleção exemplo
              </li>{" "}
              <li class="text-[13px] leading-[15px] text-[#868686]">
                Coleção exemplo
              </li>
            </ul>
            <button
              class="hidden lg:block text-xs leading-[14px] text-[#868686] underline"
              type="submit"
            >
              VER TODOS OS RESULTADOS
            </button>
          </div>
          <SearchPreview query={query} />
          <button
            class="lg:hidden text-xs leading-[14px] text-[#868686] underline"
            type="submit"
          >
            VER TODOS OS RESULTADOS
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
