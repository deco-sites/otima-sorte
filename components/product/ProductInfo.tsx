import { SendEventOnView } from "$store/components/Analytics.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import AddToCartButtonLinx from "$store/islands/AddToCartButton/linx.tsx";
import AddToCartButtonShopify from "$store/islands/AddToCartButton/shopify.tsx";
import AddToCartButtonVNDA from "$store/islands/AddToCartButton/vnda.tsx";
import AddToCartButtonVTEX from "$store/islands/AddToCartButton/vtex.tsx";
import AddToCartButtonWake from "$store/islands/AddToCartButton/wake.tsx";
import AddToCartButtonNuvemshop from "$store/islands/AddToCartButton/nuvemshop.tsx";
import OutOfStock from "$store/islands/OutOfStock.tsx";
import ShippingSimulation from "$store/islands/ShippingSimulation.tsx";
import WishlistButton from "$store/islands/WishlistButton.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import { ProductDetailsPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import ProductSelector from "./ProductVariantSelector.tsx";

interface Props {
  page: ProductDetailsPage | null;
  layout: {
    /**
     * @title Product Name
     * @description How product title will be displayed. Concat to concatenate product and sku names.
     * @default product
     */
    name?: "concat" | "productGroup" | "product";
  };
}

function ProductInfo({ page, layout }: Props) {
  const platform = usePlatform();
  const id = useId();

  if (page === null) {
    throw new Error("Missing Product Details Page Info");
  }

  const { breadcrumbList, product } = page;

  const { productID, offers, isVariantOf, additionalProperty = [] } = product;
  const description = product.description || isVariantOf?.description;
  const {
    price = 0,
    listPrice = 0,
    seller = "1",
    installments,
    availability,
  } = useOffer(offers);
  const productGroupID = isVariantOf?.productGroupID ?? "";
  const breadcrumb = {
    ...breadcrumbList,
    itemListElement: breadcrumbList?.itemListElement.slice(0, -1),
    numberOfItems: breadcrumbList.numberOfItems - 1,
  };

  const eventItem = mapProductToAnalyticsItem({
    product,
    breadcrumbList: breadcrumb,
    price,
    listPrice,
  });

  function calculateDiscount(currentPrice: number, originalPrice: number) {
    const discount = originalPrice - currentPrice;

    const discountPercent = (discount / originalPrice) * 100;

    return discountPercent;
  }

  return (
    <div class="flex flex-col lg:shadow lg:rounded-2xl" id={id}>
      {/* <Breadcrumb itemListElement={breadcrumb.itemListElement} /> */}
      <div class="bg-[#F2970E] h-[38px] items-center justify-center rounded-t-2xl hidden lg:flex">
        <p class="text-white text-center text-[13px] font-semibold leading-normal tracking-[0.65px]">
          GANHE 1 NÚMERO DA SORTE*
        </p>
      </div>

      <div class="flex flex-col lg:px-[15px] lg:pt-[27px] lg:pb-5">
        <div class="flex flex-col lg:px-[12px] fixed z-50 lg:z-0 bottom-0 left-0 right-0 mx-0 w-screen lg:w-fit lg:static bg-white rounded-2xl lg:rounded-none">
          <div class="bg-[#F2970E] h-[38px] flex items-center justify-center rounded-t-2xl lg:hidden">
            <p class="text-white text-center text-[13px] font-semibold leading-normal tracking-[0.65px]">
              GANHE 1 NÚMERO DA SORTE*
            </p>
          </div>

          <div class="px-[15px] py-3 lg:px-0 lg:py-0">
            <div class="flex justify-between lg:flex-col">
              <div class="border border-[#6DC04B] rounded-[5px] h-[28px] w-fit px-3 mb-[10px] flex items-center justify-center">
                <p class="text-[#6DC04B] text-[13px] font-bold tracking-[0.65px] leading-normal">
                  {calculateDiscount(price, listPrice)}% OFF
                </p>
              </div>

              {/* Prices */}
              <div class="mb-3">
                <div class="flex flex-row gap-3 items-center">
                  {(listPrice ?? 0) > price && (
                    <span class="text-[#686868] text-[13px] leading-normal line-through">
                      {formatPrice(listPrice, offers?.priceCurrency)}
                    </span>
                  )}
                  <span class="text-[#2E385F] text-lg font-bold leading-normal">
                    {formatPrice(price, offers?.priceCurrency)}
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart and Favorites button */}
            {availability === "https://schema.org/InStock"
              ? (
                <>
                  {platform === "shopify" && (
                    <div class="flex lg:flex-col gap-[10px] lg:mb-5">
                      <AddToCartButtonShopify
                        eventParams={{ items: [eventItem] }}
                        productID={productID}
                      />
                      <AddToCartButtonShopify
                        eventParams={{ items: [eventItem] }}
                        productID={productID}
                      />
                    </div>
                  )}
                </>
              )
              : <OutOfStock productID={productID} />}
          </div>
        </div>

        <div class="w-full max-w-[276px] lg:max-w-[251px] rounded-2xl lg:rounded-none mx-auto shadow lg:shadow-none px-5 lg:px-0 pt-[22px] lg:pt-0 pb-[18px] lg:pb-0">
          <button class="flex w-full h-[29px] items-center justify-center gap-[7px] bg-[#F0F0F0] rounded-lg mb-[16px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <g clip-path="url(#clip0_1_332)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3882 2.95401C11.9188 1.48457 9.92687 0.668213 7.83701 0.668213C3.53318 0.668213 0 4.2014 0 8.50522C0 9.88323 0.424505 11.1894 1.11024 12.3715L0 16.3422L4.13402 15.3299C5.27692 15.9569 6.53084 16.3422 7.83701 16.3422C12.1408 16.3422 15.674 12.809 15.674 8.50522C15.674 6.42188 14.8642 4.42998 13.3882 2.95401ZM7.83701 15.0361C6.67452 15.0361 5.56427 14.6507 4.56506 14.063L4.32995 13.9193L1.87435 14.5658L2.52743 12.169L2.37069 11.9208C1.72414 10.889 1.30617 9.73302 1.30617 8.50522C1.30617 4.92632 4.25811 1.97438 7.83701 1.97438C9.56768 1.97438 11.233 2.66012 12.4608 3.88792C13.6886 5.11571 14.3678 6.77455 14.3678 8.50522C14.3678 12.0841 11.4094 15.0361 7.83701 15.0361ZM11.429 10.1053C11.233 10.0073 10.273 9.53709 10.0967 9.47178C9.92034 9.40647 9.78973 9.37382 9.65911 9.56975C9.52849 9.76567 9.15623 10.2032 9.03868 10.3339C8.92766 10.4645 8.8101 10.4775 8.61417 10.3796C8.41825 10.2816 7.79129 10.0792 7.04677 9.413C6.46553 8.89707 6.07368 8.25705 5.96266 8.06112C5.85163 7.8652 5.94959 7.7607 6.04756 7.66274C6.13246 7.57784 6.24348 7.43416 6.34144 7.32314C6.43941 7.21211 6.47206 7.12721 6.53737 6.99659C6.60268 6.86598 6.57002 6.75495 6.52431 6.65699C6.47206 6.55903 6.08021 5.599 5.91694 5.20715C5.7602 4.82836 5.59693 4.8806 5.47937 4.87407C5.36835 4.86754 5.23773 4.86754 5.10712 4.86754C4.9765 4.86754 4.76751 4.91979 4.58465 5.10918C4.40832 5.30511 3.90544 5.78186 3.90544 6.74189C3.90544 7.70193 4.60424 8.6293 4.7022 8.75992C4.80017 8.89054 6.08021 10.8629 8.03293 11.7053C8.49662 11.9078 8.86235 12.0253 9.14317 12.1168C9.61339 12.267 10.0379 12.2474 10.371 12.1951C10.7432 12.1364 11.5269 11.7249 11.6902 11.2678C11.8535 10.8106 11.8535 10.4188 11.8012 10.3404C11.7555 10.2555 11.6249 10.2032 11.429 10.1053Z"
                    fill="#686868"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_332">
                    <rect
                      width="15.674"
                      height="15.674"
                      fill="white"
                      transform="translate(0 0.668213)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p class="text-[#686868] text-[9px] font-semibold leading-[13px]">
              COMPARTILHAR NO WHATSAPP
            </p>
          </button>

          <p class="text-[#686868] text-[10px] leading-normal mb-3">
            *Na compra do eBook você ganha 1 número da sorte para concorrer a
            promoção: iPhone na mão. O número será enviado diretamente no
            e-mail.
          </p>

          <div class="flex gap-[6px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.8658 23.5164C18.3305 23.5164 23.5712 18.2757 23.5712 11.8109C23.5712 5.34619 18.3305 0.105469 11.8658 0.105469C5.401 0.105469 0.160278 5.34619 0.160278 11.8109C0.160278 18.2757 5.401 23.5164 11.8658 23.5164Z"
                  fill="#5E8E3E"
                />
                <path
                  d="M16.7296 8.28003L9.86243 15.1472L6.74097 12.0258"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="text-[#686868] text-[10px] font-semibold leading-[13px]">
              Autorização SRE/ME nº 00.000000/2023 Sorteio dia 26/01/2024 pela
              Loteria Federal.
            </p>
          </div>
        </div>
      </div>

      {/* Analytics Event */}
      <SendEventOnView
        id={id}
        event={{
          name: "view_item",
          params: {
            item_list_id: "product",
            item_list_name: "Product",
            items: [eventItem],
          },
        }}
      />
    </div>
  );
}

export default ProductInfo;
