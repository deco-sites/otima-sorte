import { AppContext } from "apps/shopify/mod.ts";
import { fetchSafe } from "apps/utils/fetch.ts";

interface Address {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  firstName: string;
  lastName: string;
  phone: string;
  province: string;
  zip: string;
}
export interface Props {
  address: Address;
  token: string;
  isDefault: boolean;
}

const action = async (
  props: Props,
  _req: Request,
  ctx: AppContext
): Promise<any> => {
  const mutation = `
    mutation {
      customerAddressCreate(address: {
        address1: "${props.address.address1}",
        address2: "${props.address.address2}",
        city: "${props.address.city}",
        company: "${props.address.company}",
        country: "${props.address.country}",
        firstName: "${props.address.firstName}",
        lastName: "${props.address.lastName}",
        phone: "${props.address.phone}",
        province: "${props.address.province}",
        zip: "${props.address.zip}",
      }
      , customerAccessToken: "${props.token}") {
        customerAddress {
          id
        }
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
  if (data.customerAddressCreate?.customerAddress.id) {
    if (props.isDefault) {
      const mutation = `
        mutation {
          customerDefaultAddressUpdate(addressId: "${data.customerAddressCreate?.customerAddress.id}", 
          customerAccessToken: "${props.token}") {
            customer {
              defaultAddress {
                id
              }
            }
          }
        }
      `;

      await fetchSafe(
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
    }

    return true;
  }

  return false;
};

export default action;
