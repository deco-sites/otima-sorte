import { AppContext } from "apps/shopify/mod.ts";
import { fetchSafe } from "apps/utils/fetch.ts";

export interface Props {
  email: string;
}

const action = async (props: Props, _req: Request, ctx: AppContext) => {
  const mutation = `
    mutation customerRecover { 
      customerRecover(email: "${props.email}") { 
        customerUserErrors {
          code
          field
          message
        } 
      } 
    }
  `;

  const response = await fetchSafe(
    //@ts-ignore ignore
    `https://${ctx.storeNameCustom}.myshopify.com/api/2024-01/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore ignore
        "X-Shopify-Storefront-Access-Token": ctx.tokenAccessCustom,
      },
      body: JSON.stringify({
        query: mutation,
      }),
    },
  );

  const { data } = await response.json();

  if (data.customerRecover?.customerUserErrors.length > 0) {
    return false;
  } else {
    return true;
  }
};

export default action;
