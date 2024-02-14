import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { AnalyticsItem } from "apps/commerce/types.ts";

interface Props {
  loading: boolean;
  currency: string;
  total: number;
  items: AnalyticsItem[];
}

function CartButton({ loading, currency, total, items }: Props) {
  const { displayCart } = useUI();
  const totalItems = items.length;

  const onClick = () => {
    sendEvent({
      name: "view_cart",
      params: { currency, value: total, items },
    });
    displayCart.value = true;
  };

  return (
    <div class="relative h-[27px] lg:h-[37px]">
      <span
        class={`absolute top-[-2px] right-[-2px] bg-white w-[18px] h-[18px] rounded-full flex items-center justify-center text-[#4C5A90] text-xs font-bold leading-normal ${
          totalItems === 0 ? "hidden" : ""
        }`}
      >
        {totalItems > 9 ? "9+" : totalItems}
      </span>

      <button
        class="w-[27px] h-[27px] lg:w-[36px] lg:h-[36px]"
        disabled={loading}
        type="button"
        onClick={onClick}
      >
        {loading ? <span class="loading loading-spinner" /> : (
          <>
            <div class="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M7.15247 3.09521L3.79248 7.5752V23.2551C3.79248 23.8492 4.02848 24.419 4.44856 24.839C4.86864 25.2591 5.43839 25.4951 6.03247 25.4951H21.7124C22.3065 25.4951 22.8762 25.2591 23.2963 24.839C23.7164 24.419 23.9524 23.8492 23.9524 23.2551V7.5752L20.5924 3.09521H7.15247Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.79248 7.5752H23.9524"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3525 12.0552C18.3525 13.2433 17.8805 14.3828 17.0404 15.223C16.2002 16.0632 15.0607 16.5352 13.8726 16.5352C12.6844 16.5352 11.5449 16.0632 10.7047 15.223C9.86457 14.3828 9.39258 13.2433 9.39258 12.0552"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <path
                  d="M9.05249 3.59082L4.55249 9.59082V30.5908C4.55249 31.3865 4.86856 32.1495 5.43117 32.7121C5.99378 33.2747 6.75684 33.5908 7.55249 33.5908H28.5525C29.3481 33.5908 30.1112 33.2747 30.6738 32.7121C31.2364 32.1495 31.5525 31.3865 31.5525 30.5908V9.59082L27.0525 3.59082H9.05249Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.55249 9.59082H31.5525"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.0525 15.5908C24.0525 17.1821 23.4203 18.7082 22.2951 19.8335C21.1699 20.9587 19.6438 21.5908 18.0525 21.5908C16.4612 21.5908 14.9351 20.9587 13.8098 19.8335C12.6846 18.7082 12.0525 17.1821 12.0525 15.5908"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </>
        )}
      </button>
    </div>
  );
}

export default CartButton;
