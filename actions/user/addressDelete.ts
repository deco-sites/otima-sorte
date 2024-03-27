import { AppContext } from "apps/shopify/mod.ts";
import { fetchSafe } from "apps/utils/fetch.ts";

export interface Props {
  token: string;
  id: string;
}

const action = async (
  props: Props,
  _req: Request,
  ctx: AppContext
): Promise<any> => {
  const mutation = `
    mutation {
      customerAddressDelete(customerAccessToken: "${props.token}", id: "gid://shopify/MailingAddress/${props.id}?model_name=CustomerAddress") {
        deletedCustomerAddressId
      }
    }
  `;

  const response = await fetchSafe(
    `https://${ctx.storeNameCustom}.myshopify.com/api/2024-01/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": ctx.tokenAccessCustom,
      },
      body: JSON.stringify({
        query: mutation,
      }),
    }
  );

  const { data } = await response.json();
  if (data.customerAddressDelete?.deletedCustomerAddressId) {
    return true;
  }

  return false;
};

export default action;
