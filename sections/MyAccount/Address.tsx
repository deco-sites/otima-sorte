import { SectionProps } from "deco/types.ts";
import { getCustomerAccessToken } from "$store/utils/user.ts";
import { extractUserInfo } from "$store/utils/shopifyUserInfo.ts";
import { mkAdminFetcher } from "$store/utils/storeFront.ts";
import { AppContext } from "apps/shopify/mod.ts";
import AddressCreate from "../../islands/AddressCreate.tsx";
import AddressCard from "../../islands/AddressCard.tsx";

interface Address {
  id: string;
  customer_id: number;
  first_name: string;
  last_name: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  country: string;
  zip: string;
  phone: string;
  name: string;
  province_code: string;
  country_code: string;
  country_name: string;
  default: boolean;
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
  const storeName = ctx.storeNameCustom;
  const tokenAccess = ctx.tokenAccessCustom;
  const tokenAdmin = ctx.tokenAdminCustom.get();
  const token = getCustomerAccessToken(_req.headers);
  const userInfo = await extractUserInfo(token, storeName, tokenAccess);
  const addresses = await getCustomerAddresses(
    userInfo?.customerId,
    storeName,
    tokenAdmin
  );
  return { addresses, token };
}

function Address({
  addresses,
  token,
}: SectionProps<Awaited<ReturnType<typeof loader>>>) {
  console.log("token", token);
  console.log(addresses);

  return (
    <div class="pt-[18px] pb-[140px] lg:pt-[34px] lg:pb-[212px] px-[15px]">
      <div class="max-w-[480px] mx-auto flex flex-col items-center">
        <h1 class="text-[#1E274A] text-center text-xl font-semibold leading-normal mb-[9px] lg:text-[26px] lg:mb-5">
          Endereços
        </h1>
        <a
          href="/my-account"
          class="text-[#444] text-center text-sm font-semibold leading-normal underline w-fit mx-auto cursor-pointer mb-[9px] lg:mb-5"
        >
          Retornar às Informações da conta
        </a>
        <AddressCreate token={token} />
        <ul class="flex flex-col gap-8">
          {addresses.map((address: Address, index: number) => (
            <AddressCard address={address} token={token} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Address;
