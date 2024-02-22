import { mkStoreFrontFetcher } from "./storeFront.ts";

export async function extractUserInfo(token?: string | null) {
  if (!token) {
    return null;
  }

  try {
    const fetcher = mkStoreFrontFetcher("StoreName", "TokenAccess");

    const data = await fetcher(`query {
      customer(customerAccessToken: "${token}") {
        id
        firstName
        lastName
        acceptsMarketing
        email
        phone
      }
    }`);

    const customer = data.customer;
    const customerId = customer.id.split("/").pop();

    return {
      ...customer,
      customerId,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
