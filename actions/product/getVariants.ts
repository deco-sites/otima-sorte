import { fetchSafe } from "apps/utils/fetch.ts";

export interface Props {
  id: string;
}

const action = async (
  props: Props,
  _req: Request,
): Promise<string | undefined> => {
  console.log("props id", props.id);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": "TokenAdmin",
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
    "https://StoreName.myshopify.com/admin/api/2024-01/graphql.json",
    options,
  );

  const { data } = await response.json();

  return data.productVariant;
};

export default action;
