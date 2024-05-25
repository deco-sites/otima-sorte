import { SectionProps } from "deco/types.ts";
import { getCustomerAccessToken } from "$store/utils/user.ts";
import { extractUserInfo } from "$store/utils/shopifyUserInfo.ts";
import { mkAdminFetcher } from "$store/utils/storeFront.ts";
import { UserOrders } from "$store/types.ts";
import OrdersTable from "$store/islands/OrdersTable.tsx";
import { AppContext } from "apps/shopify/mod.ts";

//deno-lint-ignore no-explicit-any
function parseOrders(orders: any[]): UserOrders {
  //@ts-ignore ignore
  return orders.map((order) => {
    return {
      "@type": "UserOrder",
      id: order.id,
      name: order.name,
      createdAt: order.created_at,
      financial_status: order.financial_status,
      fulfillment_status: order.fulfillment_status,
      totalPrice: order.total_price,
    };
  });
}

async function getCustomerOrders(
  customerId: string,
  storeName: string,
  tokenAdmin: string
) {
  if (!customerId) {
    return null;
  }

  try {
    const fetcher = mkAdminFetcher(storeName, tokenAdmin);
    const data = await fetcher(
      `customers/${customerId}/orders.json?status=any`
    );

    const parsedOrders = parseOrders(data.orders);
    return parsedOrders;
  } catch (err) {
    console.log("err", err);
    return null;
  }
}

async function getCustomerAddresses(
  customerId: string,
  storeName: string,
  tokenAdmin: string
) {
  if (!customerId) {
    return null;
  }

  try {
    const fetcher = mkAdminFetcher(storeName, tokenAdmin);
    const data = await fetcher(`customers/${customerId}/addresses.json`);
    return data?.addresses;
  } catch (err) {
    return null;
  }
}

//deno-lint-ignore no-explicit-any
export async function loader(_: any, _req: Request, ctx: AppContext) {
  //@ts-ignore ignore
  const storeName = ctx.storeNameCustom;
  //@ts-ignore ignore
  const tokenAccess = ctx.tokenAccessCustom;
  //@ts-ignore ignore
  const tokenAdmin = ctx.tokenAdminCustom.get();
  const token = getCustomerAccessToken(_req.headers);
  //@ts-ignore ignore
  const userInfo = await extractUserInfo(token, storeName, tokenAccess);
  const orders = await getCustomerOrders(
    userInfo?.customerId,
    storeName,
    tokenAdmin
  );
  const addresses = await getCustomerAddresses(
    userInfo?.customerId,
    storeName,
    tokenAdmin
  );
  //@ts-ignore ignore
  const defaultAddress = addresses?.find((address) => address.default);
  return { userInfo, orders, defaultAddress, addresses };
}

function MyAccount({
  userInfo,
  orders,
  defaultAddress,
  addresses,
}: SectionProps<Awaited<ReturnType<typeof loader>>>) {
  return (
    <div class="pt-[18px] pb-[140px] lg:pt-[34px] lg:pb-[212px]">
      <h1 class="text-[#1E274A] text-center text-xl font-semibold leading-normal mb-[9px] lg:text-[26px] lg:mb-5">
        Minha conta
      </h1>
      <div class="flex gap-[11px] w-fit mx-auto text-[#1E274A] text-[15px] leading-normal lg:text-lg mb-[45px]">
        <p>Seja bem-vindo, {userInfo?.firstName}!</p>
        <button class="font-bold underline">SAIR</button>
      </div>
      <div class="px-[15px]">
        <div class="flex flex-col lg:flex-row max-w-[1270px] mx-auto gap-[15px] justify-between">
          <OrdersTable orders={orders} />
          <div>
            <div class="w-full lg:max-w-[302px] bg-[#F6F6F6] px-[24px] py-[30px] rounded-[7px]">
              <div class="flex items-center gap-[10px] mb-[30px]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="25"
                    viewBox="0 0 23 25"
                    fill="none"
                  >
                    <path
                      d="M20.6919 23.1882V20.7982C20.6919 19.5305 20.1883 18.3147 19.2919 17.4183C18.3955 16.5219 17.1797 16.0183 15.912 16.0183H6.35217C5.08446 16.0183 3.86867 16.5219 2.97227 17.4183C2.07586 18.3147 1.57227 19.5305 1.57227 20.7982V23.1882"
                      stroke="#2E385F"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.1324 11.2383C13.7723 11.2383 15.9124 9.09824 15.9124 6.45837C15.9124 3.8185 13.7723 1.67847 11.1324 1.67847C8.49258 1.67847 6.35254 3.8185 6.35254 6.45837C6.35254 9.09824 8.49258 11.2383 11.1324 11.2383Z"
                      stroke="#2E385F"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p class="text-[#686868] text-lg font-semibold leading-normal lg:text-xl">
                  Detalhes da conta
                </p>
              </div>
              <p class="text-[#1E274A] text-base mb-[32px]">
                {defaultAddress?.name}
                <br />
                <br />
                {defaultAddress?.address1} - {defaultAddress?.city} -{" "}
                {defaultAddress?.province_code} - {defaultAddress?.zip} -{" "}
                {defaultAddress?.country}
              </p>
              <button class="bg-[#2E385F] w-full max-w-[186px] h-[35px] rounded-lg flex items-center justify-center text-white text-[13px] font-medium leading-normal">
                VER ENDEREÇOS ({addresses?.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
