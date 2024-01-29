import { SendEventOnView } from "$store/components/Analytics.tsx";
import { Layout as CardLayout } from "$store/components/product/ProductCard.tsx";
import Filters from "$store/islands/Filters.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import SearchControls from "$store/islands/SearchControls.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { ProductListingPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";
import SearchTerm from "$store/islands/SearchTerm.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Sort from "$store/components/search/Sort.tsx";

export interface Layout {
  /**
   * @description Use drawer for mobile like behavior on desktop. Aside for rendering the filters alongside the products
   */
  variant?: "aside" | "drawer";
  /**
   * @description Number of products per line on grid
   */
  columns?: Columns;
}

export interface Props {
  /** @title Integration */
  page: ProductListingPage | null;
  perPage: number;
  layout?: Layout;
  cardLayout?: CardLayout;

  /** @description 0 for ?page=0 as your first page */
  startingPage?: 0 | 1;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <span>Not Found!</span>
    </div>
  );
}

function Result({
  page,
  perPage = 3,
  layout,
  cardLayout,
  startingPage = 0,
}: Omit<Props, "page"> & { page: ProductListingPage }) {
  const { products, filters, breadcrumb, pageInfo, sortOptions } = page;

  const id = useId();

  const zeroIndexedOffsetPage = pageInfo.currentPage - startingPage;
  const offset = zeroIndexedOffsetPage * perPage;

  /* total pages */
  /* console.log("total pages", Math.ceil(pageInfo.records / perPage)); */

  return (
    <>
      <div class="px-[10px]">
        <div class="max-w-[1270px] mx-auto">
          <SearchTerm />
          <Breadcrumb itemListElement={breadcrumb?.itemListElement} />

          <div class="lg:hidden">
            <SearchControls
              sortOptions={sortOptions}
              filters={filters}
              breadcrumb={breadcrumb}
              displayFilter={layout?.variant === "drawer"}
            />
          </div>

          {pageInfo.records && (
            <p class="text-[#9DA6BA] text-sm leading-normal text-center mb-[30px] lg:hidden">
              {pageInfo.records} {pageInfo.records > 1 ? "produtos" : "produto"}
            </p>
          )}

          <div class="flex flex-row gap-[33px] mb-[73px] lg:mb-[108px]">
            {layout?.variant === "aside" && filters.length > 0 && (
              <aside class="hidden lg:block w-full max-w-[292px]">
                <Filters filters={filters} />
              </aside>
            )}
            <div class="flex-1" id={id}>
              <div class="hidden lg:flex items-center justify-between mb-[25px]">
                {pageInfo.records && (
                  <p class="text-[#9DA6BA] text-sm leading-normal">
                    {pageInfo.records}{" "}
                    {pageInfo.records > 1 ? "produtos" : "produto"}
                  </p>
                )}
                {sortOptions.length > 0 && <Sort sortOptions={sortOptions} />}
              </div>
              <ProductGallery
                products={products}
                offset={offset}
                layout={{ card: cardLayout, columns: layout?.columns }}
              />
              <div class="flex justify-center mt-[68px] mb-[73px] lg:mt-[117px] lg:mb-[108px]">
                <div class="join">
                  <a
                    aria-label="previous page link"
                    rel="prev"
                    href={pageInfo.previousPage ?? "#"}
                    class="btn btn-ghost join-item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                    >
                      <rect
                        x="0.674805"
                        y="0.5"
                        width="29"
                        height="29"
                        rx="4.5"
                        fill="#2E385F"
                        stroke="white"
                      />
                      <path
                        d="M18.0034 20.6568L12.3466 15L18.0034 9.34314"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <span class="btn btn-ghost join-item">
                    Página {zeroIndexedOffsetPage + 1} de{" "}
                    {pageInfo.records && Math.ceil(pageInfo.records / perPage)}
                  </span>
                  <a
                    aria-label="next page link"
                    rel="next"
                    href={pageInfo.nextPage ?? "#"}
                    class="btn btn-ghost join-item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                    >
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="29"
                        height="29"
                        rx="4.5"
                        transform="matrix(-1 0 0 1 29.1748 0)"
                        fill="#2E385F"
                        stroke="white"
                      />
                      <path
                        d="M12.3462 20.6568L18.003 15L12.3462 9.34314"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p class="text-center text-[#444] text-sm leading-5 mb-[127px] lg:mb-[181px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
      <SendEventOnView
        id={id}
        event={{
          name: "view_item_list",
          params: {
            // TODO: get category name from search or cms setting
            item_list_name: breadcrumb.itemListElement?.at(-1)?.name,
            item_list_id: breadcrumb.itemListElement?.at(-1)?.item,
            items: page.products?.map((product, index) =>
              mapProductToAnalyticsItem({
                ...useOffer(product.offers),
                index: offset + index,
                product,
                breadcrumbList: page.breadcrumb,
              })
            ),
          },
        }}
      />
    </>
  );
}

function SearchResult({ page, ...props }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Result {...props} page={page} />;
}

export default SearchResult;
