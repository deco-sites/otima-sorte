import type { RequestURLParam } from "apps/website/functions/requestToParam.ts";
import type { SectionProps } from "deco/mod.ts";
import { AppContext } from "apps/shopify/mod.ts";
import PromoCardPDPIsland from "../islands/PromoCardPDP.tsx";

export interface Props {
  slug: RequestURLParam;
}

export async function loader(props: Props, _req: Request, ctx: AppContext) {
  const { slug } = props;
  const splitted = slug?.split("-");
  const maybeSkuId = Number(splitted[splitted.length - 1]);

  const options = {
    method: "GET",
    headers: {
      //@ts-ignore ignore
      "X-Shopify-Access-Token": ctx.tokenAdminCustom.get(),
    },
  };

  const { variant } = await fetch(
    //@ts-ignore ignore
    `https://${ctx.storeNameCustom}.myshopify.com/admin/api/2024-01/variants/${maybeSkuId}.json`,
    options
  ).then((response) => response.json());

  const id = variant.admin_graphql_api_id;

  return { id };
}

//@ts-ignore
const PromoCardPDP = ({ id }: SectionProps<typeof loader>) => {
  return <PromoCardPDPIsland id={id} />;
};

export default PromoCardPDP;
