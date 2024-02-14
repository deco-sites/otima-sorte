import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { AnalyticsItem } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useCallback, useState } from "preact/hooks";

export interface Item {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  quantity: number;
  price: {
    sale: number;
    list: number;
  };
}

export interface Props {
  item: Item;
  index: number;

  locale: string;
  currency: string;

  onUpdateQuantity: (quantity: number, index: number) => Promise<void>;
  itemToAnalyticsItem: (index: number) => AnalyticsItem | null | undefined;
}

function CartItem({
  item,
  index,
  locale,
  currency,
  onUpdateQuantity,
  itemToAnalyticsItem,
}: Props) {
  const {
    image,
    name,
    price: { sale, list },
    quantity,
  } = item;
  const isGift = sale < 0.01;
  const [loading, setLoading] = useState(false);

  const withLoading = useCallback(
    <A,>(cb: (args: A) => Promise<void>) => async (e: A) => {
      try {
        setLoading(true);
        await cb(e);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return (
    <div class="flex gap-[17px]">
      <Image
        {...image}
        src={image.src.replace("55-55", "255-255")}
        style={{ aspectRatio: "74.35 / 111.64" }}
        width={74.35}
        height={111.64}
        class="h-full object-contain"
      />
      <div class="flex-grow">
        <div class="flex justify-between items-start mb-[9px]">
          <p class="text-[#444] text-base leading-normal">{name}</p>
          <button
            disabled={loading || isGift}
            class=""
            onClick={withLoading(async () => {
              const analyticsItem = itemToAnalyticsItem(index);
              await onUpdateQuantity(0, index);
              analyticsItem &&
                sendEvent({
                  name: "remove_from_cart",
                  params: { items: [analyticsItem] },
                });
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M3.13281 6.75879H5.13281H21.1328"
                stroke="#939393"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.1328 6.75879V20.7588C19.1328 21.2892 18.9221 21.7979 18.547 22.173C18.172 22.5481 17.6632 22.7588 17.1328 22.7588H7.13281C6.60238 22.7588 6.09367 22.5481 5.7186 22.173C5.34353 21.7979 5.13281 21.2892 5.13281 20.7588V6.75879M8.13281 6.75879V4.75879C8.13281 4.22836 8.34353 3.71965 8.7186 3.34458C9.09367 2.9695 9.60238 2.75879 10.1328 2.75879H14.1328C14.6632 2.75879 15.172 2.9695 15.547 3.34458C15.9221 3.71965 16.1328 4.22836 16.1328 4.75879V6.75879"
                stroke="#939393"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.1328 11.7588V17.7588"
                stroke="#939393"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1328 11.7588V17.7588"
                stroke="#939393"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center gap-[11px] mb-3">
          <span class="text-[#686868] text-[13px] leading-normal line-through">
            {formatPrice(list, currency, locale)}
          </span>
          <span class="text-[#2E385F] text-[17px] font-bold leading-normal">
            {isGift ? "Grátis" : formatPrice(sale, currency, locale)}
          </span>
        </div>
        <div class="bg-[#F2970E] w-full max-w-[223px] h-[28px] flex items-center justify-center rounded-[5px]">
          <span class="text-white text-[13px] font-semibold leading-normal tracking-[0.65px]">
            GANHE 1 NÚMERO DA SORTE
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
