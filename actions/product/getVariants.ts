import { fetchSafe } from "apps/utils/fetch.ts";
import { AppContext } from "apps/shopify/mod.ts";

export interface Props {
  id: string;
}

const action = async (
  props: Props,
  _req: Request,
  ctx: AppContext,
): Promise<string | undefined> => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore ignore
      "X-Shopify-Access-Token": ctx.tokenAdminCustom.get(),
    },
    body: JSON.stringify({
      query: `
        query {
          productVariant(id: "${props.id}") {
            sku
            product {
              variants(first: 250) {
                nodes {
                  id
                  sku
                  compareAtPrice
                  price
                  metafield(namespace: "custom" key: "numeros") {
                    value
                  }
                }
              }
            }
          }
        }
      `,
    }),
  };

  const response = await fetchSafe(
    //@ts-ignore ignore
    `https://${ctx.storeNameCustom}.myshopify.com/admin/api/2024-01/graphql.json`,
    options,
  );

  const { data } = await response.json();

  return data.productVariant;
};

export default action;
