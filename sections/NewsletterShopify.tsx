import { SectionProps } from "deco/types.ts";
import { AppContext } from "apps/shopify/mod.ts";
import { getCustomerAccessToken } from "$store/utils/user.ts";
import { extractUserInfo } from "$store/utils/shopifyUserInfo.ts";
import NewsletterShopifyForm from "$store/islands/NewsletterShopifyForm.tsx";

export async function loader(_: any, _req: Request, ctx: AppContext) {
  const storeName = ctx.storeNameCustom;
  const tokenAccess = ctx.tokenAccessCustom;
  const token = getCustomerAccessToken(_req.headers);
  const userInfo = await extractUserInfo(token, storeName, tokenAccess);
  const customerId = userInfo?.customerId;
  return { customerId };
}

const NewsletterShopify = ({
  customerId,
}: SectionProps<Awaited<ReturnType<typeof loader>>>) => {
  return <NewsletterShopifyForm customerId={customerId} />;
};

export default NewsletterShopify;
