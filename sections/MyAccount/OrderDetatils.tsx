import type { RequestURLParam } from "apps/website/functions/requestToParam.ts";
import type { SectionProps } from "deco/mod.ts";
import { getCustomerAccessToken } from "$store/utils/user.ts";
import { extractUserInfo } from "$store/utils/shopifyUserInfo.ts";
import { mkAdminFetcher } from "$store/utils/storeFront.ts";
import { UserOrders } from "$store/types.ts";

export interface Props {
  slug: RequestURLParam;
}

async function getProduct(productId: number) {
  try {
    const fetcher = mkAdminFetcher("StoreName", "TokenAdmin");
    const data = await fetcher(`/products/${productId}.json`);
    return data.product.image;
  } catch (err) {
    console.log("err", err);
    return null;
  }
}

//deno-lint-ignore no-explicit-any
async function parseOrders(orders: any[]): UserOrders {
  //deno-lint-ignore no-explicit-any
  async function getProductWithImage(product: any): Promise<any> {
    const image = await getProduct(product.product_id);
    return { ...product, image };
  }

  const parsedOrders = await Promise.all(
    orders.map(async (order) => {
      const products = order.line_items;

      const productsWithImages = await Promise.all(
        products.map(async (product) => {
          return await getProductWithImage(product);
        }),
      );

      return {
        "@type": "UserOrder",
        id: order.id,
        name: order.name,
        products: productsWithImages,
        billingAddress: order.billing_address,
        subtotalPrice: order.subtotal_price,
        totalDiscounts: order.total_discounts,
        totalTax: order.total_tax,
        totalPrice: order.total_price,
      };
    }),
  );

  return parsedOrders;
}

async function getCustomerOrders(customerId?: string | null) {
  if (!customerId) {
    return null;
  }

  try {
    const fetcher = mkAdminFetcher("StoreName", "TokenAdmin");
    const data = await fetcher(
      `customers/${customerId}/orders.json?status=any`,
    );

    const parsedOrders = parseOrders(data.orders);
    return parsedOrders;
  } catch (err) {
    console.log("err", err);
    return null;
  }
}

export async function loader(props: Props, _req: Request) {
  const token = getCustomerAccessToken(_req.headers);
  const userInfo = await extractUserInfo(token);
  const orders = await getCustomerOrders(userInfo?.customerId);
  const { slug } = props;
  const orderName = `#${slug}`;

  const currentOrder = orders?.find((order) => order.name === orderName);
  return { currentOrder };
}

const OrderDetatils = ({ currentOrder }: SectionProps<typeof loader>) => {
  console.log("currentOrderrrrrr", currentOrder);

  return (
    <div class="pt-5 pb-[65px] px-[10px] lg:pt-[34px]">
      <div class="max-w-[1270px] mx-auto">
        <h1 class="text-[#1E274A] text-center text-base leading-normal lg:text-xl mb-[30px]">
          <span class="font-semibold">Minha conta /</span> {currentOrder?.name}
        </h1>

        <div class="mb-[30px] lg:mb-4 flex flex-col gap-[15px]">
          {currentOrder?.products.map((product, index: number) => (
            <div
              key={index}
              class="bg-[#F6F6F6] rounded-[7px] pt-[13px] pb-[35px] px-2 lg:pt-[26px] lg:pb-12 lg:pl-[43px] lg:pr-[19px]"
            >
              <div class="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
                <div class="flex gap-[23px] lg:items-center">
                  <img
                    src={product.image.src}
                    alt={product.image.alt}
                    class="max-w-[62px] lg:max-w-[78px]"
                  />
                  <div class="flex flex-col gap-[13px] lg:gap-[14px]">
                    <p class="text-[#444] text-sm leading-normal lg:text-base">
                      {product.name}
                    </p>
                    <p class="text-[#F2970E] text-xs font-semibold leading-normal tracking-[0.6px] lg:text-[13px] lg:tracking-[0.65px]">
                      GANHE 1 NÚMERO DA SORTE
                    </p>
                    <p class="text-[#444] text-[11px] font-bold leading-normal lg:text-[10px]">
                      Produto digital, enviado por e-mail para download.
                    </p>
                  </div>
                </div>
                <div class="pl-[85px] flex flex-col gap-2 lg:flex-row lg:justify-between lg:pl-0 lg:w-full lg:max-w-[605px]">
                  <p class="text-[#444] text-base leading-normal">Cód.:</p>
                  <p class="text-[#2E385F] text-[17px]  font-bold leading-normal">
                    {product.price}
                  </p>
                  <p class="text-[#444] text-base leading-normal">
                    Qtd. {product.quantity}
                  </p>
                  <p class="text-[#2E385F] text-[17px]  font-bold leading-normal">
                    {product.price * product.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div class="w-full flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div class="lg:order-2 w-full max-w-[410px] flex flex-col gap-[15px]">
            <div class="flex justify-between">
              <p class="text-[#686868] text-[13px] font-medium leading-normal lg:text-sm">
                Subtotal
              </p>
              <p class="text-[#575757] text-right text-[13px] font-medium leading-normal lg:text-base">
                {currentOrder.subtotalPrice}
              </p>
            </div>
            <div class="flex justify-between">
              <p class="text-[#686868] text-[13px] font-medium leading-normal lg:text-sm">
                Descontos
              </p>
              <p class="text-[#7C7C7C] text-right text-[13px] leading-normal lg:text-base">
                {currentOrder.totalDiscounts}
              </p>
            </div>
            <div class="flex justify-between">
              <p class="text-[#686868] text-[13px] font-medium leading-normal lg:text-sm">
                Taxas
              </p>
              <p class="text-[#7C7C7C] text-right text-[13px] leading-normal lg:text-base">
                {currentOrder.totalTax}
              </p>
            </div>
            <div class="flex justify-between border-t border-[#E5E5E5] pt-[15px]">
              <p class="text-[#7C7C7C] text-lg font-extrabold leading-normal lg:text-xl">
                Total
              </p>
              <p class="text-[#2E385F] text-right text-xl font-bold leading-normal text-[22px]">
                {currentOrder.totalPrice}
              </p>
            </div>
          </div>

          <div class="max-w-[240px] lg:order-1">
            <p class="text-[#2E385F] text-base font-semibold leading-normal mb-[6px] lg:text-[17px]">
              Endereço de cobrança
            </p>
            <p class="text-[#1E274A] text-sm lg:text-base">
              {currentOrder.billingAddress?.name}
              <br />
              <br />
              {currentOrder.billingAddress?.address1} -{" "}
              {currentOrder.billingAddress?.city} -{" "}
              {currentOrder.billingAddress?.province_code} -{" "}
              {currentOrder.billingAddress?.zip} -{" "}
              {currentOrder.billingAddress?.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetatils;
