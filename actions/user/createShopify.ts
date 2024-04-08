import { mkStoreFrontFetcher } from "$store/utils/storeFront.ts";
import { AppContext } from "apps/shopify/mod.ts";

export interface Props {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const action = async (props: Props, _req: Request, ctx: AppContext) => {
  const fetcher = mkStoreFrontFetcher(
    //@ts-ignore ignore
    ctx.storeNameCustom,
    //@ts-ignore ignore
    ctx.tokenAccessCustom,
  );

  const data = await fetcher(`mutation customerCreate { 
    customerCreate(input: {
      firstName: "${props.firstName}",
      lastName: "${props.lastName}",
      email: "${props.email}",
      password: "${props.password}",
      acceptsMarketing: ${false}
    }) { 
      customer { 
        firstName 
        lastName 
        email 
        phone 
        acceptsMarketing 
      } 
      customerUserErrors { 
        field 
        message 
        code 
      } 
    } 
  }`);

  return data;
};

export default action;
