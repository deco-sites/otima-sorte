import { mkStoreFrontFetcher } from "$store/utils/storeFront.ts";
import { AppContext } from "apps/shopify/mod.ts";

export interface Props {
  email: string;
}

//deno-lint-ignore no-explicit-any
const action = async (
  props: Props,
  _req: Request,
  ctx: AppContext
): Promise<any> => {
  const fetcher = mkStoreFrontFetcher(
    ctx.storeNameCustom,
    ctx.tokenAccessCustom
  );

  const { data } = await fetcher(`mutation customerRecover { 
    customerRecover(email: "${props.email}") { 
      customerUserErrors {
        code
        field
        message
      } 
    } 
  }`);

  console.log(data);

  return data;
};

export default action;
