import { setCustomerAccessToken } from "$store/utils/user.ts";
import { mkStoreFrontFetcher } from "$store/utils/storeFront.ts";
import { AppContext } from "apps/shopify/mod.ts";

export interface Props {
  email: string;
  password: string;
}

const action = async (
  props: Props,
  _req: Request,
  ctx: AppContext,
): Promise<string | undefined> => {
  const fetcher = mkStoreFrontFetcher(
    //@ts-ignore ignore
    ctx.storeNameCustom,
    //@ts-ignore ignore
    ctx.tokenAccessCustom,
  );

  const data = await fetcher(`mutation customerAccessTokenCreate {
    customerAccessTokenCreate(input: {
      email: "${props.email}",
      password: "${props.password}"
    }) {
      customerAccessToken {
        accessToken
      }
      customerUserErrors {
        message
      }
    }
  }`);

  try {
    const token =
      data.customerAccessTokenCreate.customerAccessToken.accessToken;
    setCustomerAccessToken(ctx.response.headers, token);
    return token;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default action;
