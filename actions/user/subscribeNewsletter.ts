import { mkStoreFrontFetcher } from "$store/utils/storeFront.ts";
import { AppContext } from "apps/shopify/mod.ts";
import { fetchSafe } from "apps/utils/fetch.ts";

export interface Props {
  customerId: string;
}

const action = async (
  props: Props,
  _req: Request,
  ctx: AppContext
): Promise<any> => {
  console.log("customerId", props.customerId);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": ctx.tokenAdminCustom.get(),
    },
    body: `{"query":"mutation customerEmailMarketingConsentUpdate($input: CustomerEmailMarketingConsentUpdateInput!) { customerEmailMarketingConsentUpdate(input: $input) { customer { id } userErrors { field message } } }","variables":{"input":{"customerId":"gid://shopify/Customer/${props.customerId}","emailMarketingConsent":{"marketingOptInLevel":"SINGLE_OPT_IN","marketingState":"SUBSCRIBED"}}}}`,
  };

  fetch(
    `https://${ctx.storeNameCustom}.myshopify.com/admin/api/2024-01/graphql.json`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export default action;
