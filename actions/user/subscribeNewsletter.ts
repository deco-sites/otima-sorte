import { AppContext } from "apps/shopify/mod.ts";
import { fetchSafe } from "apps/utils/fetch.ts";

export interface Props {
  name: string;
  email: string;
}

const action = async (props: Props, _req: Request, ctx: AppContext) => {
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
    //@ts-ignore ignore
    `https://${ctx.storeNameCustom}.myshopify.com/admin/api/2024-01/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore ignore
        "X-Shopify-Access-Token": ctx.tokenAdminCustom.get(),
      },
      body: JSON.stringify({
        query: mutation,
        variables: input,
      }),
    },
  );

  const { data } = await response.json();

  if (
    data.customerCreate.userErrors.find(
      //@ts-ignore ignore
      (err) => err.message === "Email is invalid",
    )
  ) {
    return false;
  }

  if (
    data.customerCreate.userErrors.find(
      //@ts-ignore ignore
      (err) => err.message === "Email has already been taken",
    )
  ) {
    const query = `
      query {
        customers(query: "${props.email}", first: 1) {
          nodes {
            id
            email
          }
        }
      }
    `;

    const response = await fetchSafe(
      //@ts-ignore ignore
      `https://${ctx.storeNameCustom}.myshopify.com/admin/api/2024-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //@ts-ignore ignore
          "X-Shopify-Access-Token": ctx.tokenAdminCustom.get(),
        },
        body: JSON.stringify({
          query: query,
        }),
      },
    );

    const { data } = await response.json();
    const customerId = data.customers.nodes[0].id;

    if (customerId) {
      const mutation = `
        mutation customerEmailMarketingConsentUpdate($input: CustomerEmailMarketingConsentUpdateInput!) {
          customerEmailMarketingConsentUpdate(input: $input) {
            customer {
              email
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
          customerId: customerId,
          emailMarketingConsent: {
            marketingOptInLevel: "SINGLE_OPT_IN",
            marketingState: "SUBSCRIBED",
          },
        },
      };

      const response = await fetchSafe(
        //@ts-ignore ignore
        `https://${ctx.storeNameCustom}.myshopify.com/admin/api/2024-01/graphql.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //@ts-ignore ignore
            "X-Shopify-Access-Token": ctx.tokenAdminCustom.get(),
          },
          body: JSON.stringify({
            query: mutation,
            variables: input,
          }),
        },
      );

      const { data } = await response.json();
      if (data.customerEmailMarketingConsentUpdate.customer) {
        return true;
      }
    }

    return false;
  }

  return true;
};

export default action;
