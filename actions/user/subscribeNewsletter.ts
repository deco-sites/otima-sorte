import { AppContext } from "apps/shopify/mod.ts";
import { fetchSafe } from "apps/utils/fetch.ts";

export interface Props {
  name: string;
  email: string;
}

const action = async (
  props: Props,
  _req: Request,
  ctx: AppContext
): Promise<any> => {
  const splitName = (fullName: string) => {
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    return {
      firstName: firstName,
      lastName: lastName,
    };
  };

  const splitedName = splitName(props.name);

  const mutation = `
    mutation customerCreate($input: CustomerInput!) {
      customerCreate(input: $input) {
        customer {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const input = {
    input: {
      firstName: splitedName.firstName,
      lastName: splitedName.lastName,
      email: props.email,
      emailMarketingConsent: {
        marketingOptInLevel: "SINGLE_OPT_IN",
        marketingState: "SUBSCRIBED",
      },
    },
  };

  const response = await fetchSafe(
    `https://${ctx.storeNameCustom}.myshopify.com/admin/api/2024-01/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": ctx.tokenAdminCustom.get(),
      },
      body: JSON.stringify({
        query: mutation,
        variables: input,
      }),
    }
  );

  const { data } = await response.json();
  const id = data.customerCreate.customer?.id;

  return id;
};

export default action;
