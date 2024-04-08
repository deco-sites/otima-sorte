import { itemToAnalyticsItem, useCart } from "apps/shopify/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useCallback, useEffect, useState } from "preact/hooks";
import { invoke } from "../runtime.ts";
import Button from "$store/components/ui/Button.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { AnalyticsItem } from "apps/commerce/types.ts";

const PreCheckot = () => {
  const [idToRemove, setIdToRemove] = useState(undefined);
  const [removed, setRemoved] = useState(true);
  const [products, setProducts] = useState([]);
  const { cart, loading, updateItems, addItems } = useCart();
  const items = cart.value?.lines?.nodes ?? [];
  const coupons = cart.value?.discountCodes;
  const coupon =
    coupons && coupons[0]?.applicable ? coupons[0].code : undefined;
  const locale = "pt-BR";
  const currency = cart.value?.cost?.totalAmount.currencyCode ?? "BRL";
  const total = cart.value?.cost?.totalAmount.amount ?? 0;
  const subTotal = cart.value?.cost?.subtotalAmount.amount ?? 0;
  const checkoutHref = cart.value?.checkoutUrl
    ? new URL(cart.value?.checkoutUrl).pathname
    : "";
  /* TODO: FIX DISCOUNTS */
  const discounts = 0;

  const isEmtpy = products.length === 0;

  const getVariants = useCallback(async ({ id }: { id: string }) => {
    const data = await invoke[
      "deco-sites/otima-sorte"
    ].actions.product.getVariants({ id });

    return data;
  }, []);

  //@ts-ignore ignore
  useEffect(async () => {
    if (idToRemove && !removed) {
      updateQuantity(0, idToRemove);
      setRemoved(true);
    }

    if (removed) {
      const updatedItems = await Promise.all(
        items.map(async (item) => {
          const id = item.merchandise.id;
          const productVariant = await getVariants({ id });
          //@ts-ignore ignore
          item.variants = productVariant?.product.variants.nodes;
          //@ts-ignore ignore
          item.sku = productVariant.sku;
          return item;
        })
      );

      const indexToRemove = updatedItems.findIndex(
        (item) => item.id === idToRemove
      );

      if (
        indexToRemove !== undefined &&
        indexToRemove >= 0 &&
        indexToRemove < updatedItems.length - 1
      ) {
        const temp = updatedItems[indexToRemove];
        updatedItems[indexToRemove] = updatedItems[updatedItems.length - 1];
        updatedItems[updatedItems.length - 1] = temp;

        updatedItems.pop();
      }

      console.log("items", items);
      console.log("updatedItems", updatedItems);

      //@ts-ignore ignore
      setProducts(updatedItems);
    }
  }, [items]);

  //@ts-ignore ignore
  const addItem = (id) =>
    addItems({
      lines: {
        merchandiseId: id,
      },
    });

  //@ts-ignore ignore
  const updateQuantity = (quantity, id) =>
    updateItems({
      lines: [
        {
          id: id,
          quantity: quantity,
        },
      ],
    });

  //@ts-ignore ignore
  const handleItemToAnalyticsItem = (index) => {
    //@ts-ignore ignore
    const item = items[index];

    return item && itemToAnalyticsItem(item, index);
  };

  return (
    <div class="px-[15px] mt-[21px] mb-[131px] lg:mt-[56px]">
      <div class="max-w-[1280px] mx-auto">
        <h1 class="mb-[21px] text-xl leading-[23px] text-center font-bold lg:text-[26px] lg:leading-[30px]">
          Sacola de compras
        </h1>
        {isEmtpy ? (
          <h1>Vazio</h1>
        ) : (
          <div class="flex flex-col gap-[22px] lg:flex-row lg:justify-between">
            <div class="w-full max-w-[948px] flex flex-col gap-5 lg:gap-[27px]">
              {products?.map((item, index) => (
                <div class="bg-[#F6F6F6] border border-[#E8E8E8] rounded-[15px] pt-[13px] pb-[35px] px-2">
                  <div class="flex items-start justify-between gap-[16px] lg:items-center mb-[14px] lg:justify-start lg:gap-[26px]">
                    <img
                      //@ts-ignore ignore
                      src={item.merchandise.image?.url}
                      alt=""
                      class="max-w-[66px]"
                    />
                    <div class="max-w-[188px] lg:w-full lg:max-w-[678px] lg:flex lg:justify-between">
                      <div class="">
                        <p class="text-[13px] leading-[15px] text-[#444444] mb-[9px]">
                          {/* @ts-ignore ignore */}
                          {item.merchandise.product.title} {item.sku}
                        </p>
                        <p class="text-[10px] leading-3 font-bold text-[#444444] mb-[11px]">
                          Produto digital, enviado por e-mail para download.
                        </p>
                      </div>
                      <div>
                        <p class="hidden lg:block text-[11px] leading-[13px] text-[#444444]">
                          {/* @ts-ignore ignore */}
                          Qtd.: {item.quantity}
                        </p>
                        <p class="text-xs leading-[14px] text-[#F2970E] font-semibold mb-[10px]">
                          GANHE 1 NÚMERO DA SORTE
                        </p>
                      </div>
                      <div class="flex items-center gap-[10px] lg:flex-col">
                        <p class="text-xs leading-[14px] text-[#686868] line-through">
                          {/* @ts-ignore ignore */}
                          {item.cost.compareAtAmountPerQuantity?.amount}
                        </p>
                        <p class="text-[17px] leading-5 font-bold text-[#2E385F]">
                          {/* @ts-ignore ignore */}
                          {item.cost.amountPerQuantity?.amount}
                        </p>
                      </div>
                    </div>
                    <button
                      class="lg:ml-auto"
                      onClick={() => {
                        //@ts-ignore ignore
                        updateQuantity(0, item.id);
                      }}
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

                  <div class="bg-[#2E385F] rounded-lg pt-[11px] pb-[16px] px-[15px] mb-[26px]">
                    <p class="text-base leading-[19px] font-bold text-[#F2970E] mb-[9px] text-center">
                      Aumente suas chances de ganhar!
                    </p>
                    <p class="text-white font-medium text-xs leading-[14px] text-center">
                      Quanto mais produtos comprar, maiores são as suas chances
                      de ganhar!
                    </p>
                  </div>

                  <div class="grid grid-cols-1 lg:grid-cols-3 gap-[18px] lg:gap-5 mb-[47px]">
                    {/* @ts-ignore ignore */}
                    {item.variants.map((variant) => (
                      <button
                        class={`rounded-[15px] pt-[13px] pb-[30px] px-[17px] flex items-start justify-between relative bg-white ${
                          //@ts-ignore ignore
                          variant.id === item.merchandise.id
                            ? "border-2 border-[#2E385F]"
                            : "border-2 border-[#E0E0E0]"
                        }`}
                        onClick={() => {
                          //@ts-ignore ignore
                          setIdToRemove(item.id);
                          setRemoved(false);
                          addItem(variant.id);
                        }}
                      >
                        <div>
                          <div class="flex items-center gap-[6px] mb-[7px]">
                            <div class="border border-[#B5B5B5] rounded-lg flex items-center justify-center w-[24px] h-[24px]">
                              <div
                                class={`bg-[#2E385F] rounded-[6px] w-[16px] h-[16px] ${
                                  //@ts-ignore ignore
                                  variant.id === item.merchandise.id
                                    ? "block"
                                    : "hidden"
                                }`}
                              />
                            </div>
                            <p class="text-sm leading-4 font-bold text-[#686868]">
                              {variant.metafield?.value}{" "}
                              {variant.metafield?.value > 1
                                ? "eBooks"
                                : "eBook"}
                            </p>
                          </div>
                          <div class="flex items-center gap-[10px] mb-[7px]">
                            <p class="text-[11px] leading-[13px] text-[#686868] line-through">
                              {variant.compareAtPrice}
                            </p>
                            <p class="text-base leading-[19px] font-bold text-[#2E385F]">
                              {variant.price}
                            </p>
                          </div>
                          <p class="text-[10px] leading-3 font-bold text-[#444444]">
                            eBook {variant.sku}
                          </p>
                        </div>
                        <img
                          src="https://fakeimg.pl/53x62/2E385F/ffffff"
                          alt=""
                        />
                        <div class="absolute bottom-[-14px] bg-[#F2970E] w-full max-w-[208px] h-[28px] flex items-center justify-center rounded-[5px]">
                          <p class="text-white text-[11px] leading-[13px] font-semibold">
                            GANHE {variant.metafield?.value}{" "}
                            {variant.metafield?.value > 1
                              ? "NÚMEROS"
                              : "NÚMERO"}{" "}
                            DA SORTE
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <p class="text-[13px] leading-[18px] text-[#686868]">
                    *Na compra do eBook você ganha a quantidade correspondente
                    de número(s) da sorte para concorrer a promoção: iPhone na
                    mão.
                  </p>
                  <p class="text-[13px] leading-[18px] text-[#686868] font-bold">
                    O número será enviado diretamente no e-mail.
                  </p>
                </div>
              ))}
            </div>

            <div class="w-full lg:max-w-[300px]">
              <div class="flex flex-col gap-[22px]">
                {/* Subtotal */}
                <div class="w-full flex justify-between">
                  <span class="text-[#444] text-base leading-normal">
                    Subtotal:
                  </span>
                  <span class="text-[#444] text-right text-[17px] leading-normal">
                    {formatPrice(subTotal, currency, locale)}
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

                <p class="text-[11px] leading-[13px] text-center text-[#686868]">
                  Os números da sorte serão gerados de forma aleatória e
                  enviados gratuitamente para você assim que o seu pedido for
                  confirmado.
                </p>

                <a
                  class="inline-block w-full fixed left-0 lg:static bottom-0 z-50 lg:z-0"
                  href={checkoutHref}
                >
                  <Button
                    data-deco="buy-button"
                    class="bg-[#6DC04B] w-full h-[45px] flex justify-center items-center text-white text-[15px] font-bold leading-normal lg:rounded-lg border-none"
                    disabled={loading || isEmtpy}
                    onClick={() => {
                      sendEvent({
                        name: "begin_checkout",
                        params: {
                          coupon,
                          currency,
                          value: total - discounts,
                          items: items
                            .map((_, index) => handleItemToAnalyticsItem(index))
                            .filter((x): x is AnalyticsItem => Boolean(x)),
                        },
                      });
                    }}
                  >
                    FINALIZAR COMPRA
                  </Button>
                </a>

                <p
                  class="text-[#444] text-center text-sm font-semibold leading-normal underline w-fit mx-auto cursor-pointer"
                  onClick={() => {
                    location.href = "/";
                  }}
                >
                  CONTINUAR COMPRANDO
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreCheckot;
