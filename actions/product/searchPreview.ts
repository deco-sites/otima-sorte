import { fetchSafe } from "apps/utils/fetch.ts";
import { AppContext } from "apps/shopify/mod.ts";

export interface Props {
  queryText: string;
}

const action = async (
  props: Props,
  _req: Request,
  ctx: AppContext
): Promise<any | undefined> => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": ctx.tokenAdminCustom.get(),
    },
    body: JSON.stringify({
      query: `
        query {
          products(first: 6, query:"${props.queryText}") {
            nodes {
              handle
              status
              featuredImage {
                url
                altText
              }
              title
              variants(first: 1) {
                nodes {
                  id
                  sku
                  compareAtPrice
                  price
                }
              }
            }
          }
        }
      `,
    }),
  };

  const response = await fetchSafe(
    `https://${ctx.storeNameCustom}.myshopify.com/admin/api/2024-01/graphql.json`,
    options
  );

  const { data } = await response.json();

  return data.products.nodes;
};

export default action;
