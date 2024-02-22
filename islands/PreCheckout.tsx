import { useCart } from "apps/shopify/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useCallback, useEffect, useState } from "preact/hooks";
import { invoke } from "../runtime.ts";

const PreCheckot = () => {
  const [products, setProducts] = useState([]);
  const { cart, loading, updateItems, addItems } = useCart();
  const items = cart.value?.lines?.nodes ?? [];
  const locale = "pt-BR";
  const currency = cart.value?.cost?.totalAmount.currencyCode ?? "BRL";
  const total = cart.value?.cost?.totalAmount.amount ?? 0;
  const subTotal = cart.value?.cost?.subtotalAmount.amount ?? 0;
  const checkoutHref = cart.value?.checkoutUrl
    ? new URL(cart.value?.checkoutUrl).pathname
    : "";

  const isEmtpy = products.length === 0;

  const getVariants = useCallback(async ({ id }: { id: string }) => {
    const data = await invoke[
      "deco-sites/otima-sorte"
    ].actions.product.getVariants({ id });

    return data;
  }, []);

  useEffect(() => {
    const updateProducts = async () => {
      if (items.length) {
        const updatedItems = await Promise.all(
          items.map(async (item) => {
            const id = item.merchandise.id;
            console.log("id", id);
            const productVariant = await getVariants({ id });
            item.variants = productVariant?.product.variants.nodes;
            item.sku = productVariant.sku;
            return item;
          }),
        );

        setProducts(updatedItems);
      }
    };

    updateProducts();
  }, [items]);

  const addItem = (id) =>
    addItems({
      lines: {
        merchandiseId: id,
      },
    });

  const updateQuantity = (quantity, index) =>
    updateItems({
      lines: [
        {
          id: items[index].id,
          quantity: quantity,
        },
      ],
    });

  return (
    <div class="max-w-[1270px] mx-auto">
      {isEmtpy ? <h1>Vazio</h1> : (
        <div class="">
          {products?.map((item, index) => (
            <div>
              <div class="flex items-center justify-between">
                <img
                  src={item.merchandise.image?.url}
                  alt=""
                  class="max-w-[66px]"
                />
                <p>
                  {item.merchandise.product.title} {item.sku}
                </p>
                <p>Qtd.: {item.quantity}</p>
                <div>
                  <p>{item.cost.compareAtAmountPerQuantity.amount}</p>
                  <p>{item.cost.amountPerQuantity.amount}</p>
                </div>
                <button
                  onClick={() => {
                    updateQuantity(0, index);
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
              <div class="grid grid-cols-3 gap-5">
                {item.variants.map((variant) => (
                  <button
                    class="border-2 border-[#2E385F] rounded-lg p-3"
                    onClick={() => {
                      addItem(variant.id);
                    }}
                  >
                    <div class="border border-[#B5B5B5] rounded-lg p-[5px] w-[30px] h-[30px]">
                      <div
                        class={`bg-[#2E385F] rounded-lg w-full h-full ${
                          variant.id === item.merchandise.id
                            ? "block"
                            : "hidden"
                        }`}
                      />
                    </div>
                    <p>{variant.sku}</p>
                    <p>{variant.id}</p>
                  </button>
                ))}
              </div>
            </div>
          ))}
          <footer class="w-full pb-5">
            <div class="flex flex-col gap-[22px] px-[27px] lg:pr-[57px] mb-5">
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
              {
                /* {discounts > 0 && (
                <div class="w-full flex justify-between">
                  <span class="text-[#444] text-base leading-normal">
                    Descontos:
                  </span>
                  <span class="text-[#444] text-right text-[17px] leading-normal">
                    {formatPrice(discounts, currency, locale)}
                  </span>
                </div>
              )} */
              }

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
          </footer>
        </div>
      )}
    </div>
  );
};

export default PreCheckot;
