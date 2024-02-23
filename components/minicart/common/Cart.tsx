import Button from "$store/components/ui/Button.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useUI } from "$store/sdk/useUI.ts";
import { AnalyticsItem } from "apps/commerce/types.ts";
import CartItem, { Item, Props as ItemProps } from "./CartItem.tsx";
import Coupon, { Props as CouponProps } from "./Coupon.tsx";
import FreeShippingProgressBar from "./FreeShippingProgressBar.tsx";

interface Props {
  items: Item[];
  loading: boolean;
  total: number;
  subtotal: number;
  discounts: number;
  locale: string;
  currency: string;
  coupon?: string;
  freeShippingTarget: number;
  checkoutHref: string;
  onAddCoupon?: CouponProps["onAddCoupon"];
  onUpdateQuantity: ItemProps["onUpdateQuantity"];
  itemToAnalyticsItem: ItemProps["itemToAnalyticsItem"];
}

function Cart({
  items,
  total,
  subtotal,
  locale,
  coupon,
  loading,
  currency,
  discounts,
  freeShippingTarget,
  checkoutHref,
  itemToAnalyticsItem,
  onUpdateQuantity,
  onAddCoupon,
}: Props) {
  const { displayCart } = useUI();
  const isEmtpy = items.length === 0;

  return (
    <div class="flex-grow">
      {isEmtpy ? (
        <div class="h-full flex flex-col pb-5">
          <div class="flex justify-between items-center pt-[14px] pl-[27px] pr-[17px]">
            <span class="text-[#2E385F] text-[17px] font-extrabold leading-normal">
              SACOLA DE COMPRAS
            </span>
            <div
              class="cursor-pointer"
              onClick={() => {
                displayCart.value = false;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <path
                  d="M24.0186 5.75L6.51855 23.25"
                  stroke="#9DA6BA"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.51855 5.75L24.0186 23.25"
                  stroke="#9DA6BA"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="mt-10 px-7">
            <p class="text-[#444] text-sm leading-normal">
              Parece que você ainda não adicionou nada ao carrinho.
            </p>
          </div>
          <div class="flex-grow" />
          <p
            class="text-[#444] text-center text-sm font-bold leading-normal w-fit mx-auto cursor-pointer"
            onClick={() => {
              displayCart.value = false;
            }}
          >
            CONTINUAR COMPRANDO
          </p>
        </div>
      ) : (
        <div class="flex flex-col h-full">
          <div class="flex justify-between items-center pt-[14px] pl-[27px] pr-[17px]">
            <span class="text-[#2E385F] text-[17px] font-extrabold leading-normal">
              SACOLA DE COMPRAS
            </span>
            <div
              class="cursor-pointer"
              onClick={() => {
                displayCart.value = false;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <path
                  d="M24.0186 5.75L6.51855 23.25"
                  stroke="#9DA6BA"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.51855 5.75L24.0186 23.25"
                  stroke="#9DA6BA"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Cart Items */}
          <ul
            role="list"
            class="mt-[73px] px-5 flex-grow overflow-y-auto flex flex-col gap-6 w-full"
          >
            {items.map((item, index) => (
              <li key={index}>
                <CartItem
                  item={item}
                  index={index}
                  locale={locale}
                  currency={currency}
                  onUpdateQuantity={onUpdateQuantity}
                  itemToAnalyticsItem={itemToAnalyticsItem}
                />
              </li>
            ))}
          </ul>

          {/* Cart Footer */}
          <footer class="w-full pb-5">
            <div class="flex flex-col gap-[22px] px-[27px] lg:pr-[57px] mb-5">
              {/* Subtotal */}
              <div class="w-full flex justify-between">
                <span class="text-[#444] text-base leading-normal">
                  Subtotal:
                </span>
                <span class="text-[#444] text-right text-[17px] leading-normal">
                  {formatPrice(subtotal, currency, locale)}
                </span>
              </div>

              {/* Discounts */}
              {discounts > 0 && (
                <div class="w-full flex justify-between">
                  <span class="text-[#444] text-base leading-normal">
                    Descontos:
                  </span>
                  <span class="text-[#444] text-right text-[17px] leading-normal">
                    {formatPrice(discounts, currency, locale)}
                  </span>
                </div>
              )}

              {/* Total */}
              <div class="w-full flex justify-between">
                <span class="text-[#444] text-base font-semibold leading-normal">
                  TOTAL:
                </span>
                <span class="text-[#2E385F] text-right text-xl font-bold leading-normal">
                  {formatPrice(total, currency, locale)}
                </span>
              </div>
            </div>

            <div class="px-6 mb-6">
              <a class="inline-block w-full" href="/pre-checkout">
                <Button
                  data-deco="buy-button"
                  class="bg-[#6DC04B] w-full h-[45px] flex justify-center items-center rounded-lg text-white text-[15px] font-bold leading-normal"
                  disabled={loading || isEmtpy}
                  onClick={() => {
                    sendEvent({
                      name: "begin_checkout",
                      params: {
                        coupon,
                        currency,
                        value: total - discounts,
                        items: items
                          .map((_, index) => itemToAnalyticsItem(index))
                          .filter((x): x is AnalyticsItem => Boolean(x)),
                      },
                    });
                  }}
                >
                  FINALIZAR COMPRA
                </Button>
              </a>
            </div>

            <p
              class="text-[#444] text-center text-sm font-semibold leading-normal underline w-fit mx-auto cursor-pointer"
              onClick={() => {
                displayCart.value = false;
              }}
            >
              CONTINUAR COMPRANDO
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default Cart;
