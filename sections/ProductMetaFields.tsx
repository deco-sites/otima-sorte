import type { RequestURLParam } from "apps/website/functions/requestToParam.ts";
import type { SectionProps } from "deco/mod.ts";

export interface Props {
  token: string;
  slug: RequestURLParam;
}

interface Metafild {
  id: number;
  namespace: string;
  key: string;
  value: string;
  description: string | null;
  owner_id: number;
  created_at: string;
  updated_at: string;
  owner_resource: string;
  type: string;
  admin_graphql_api_id: string;
}

export async function loader(props: Props, _req: Request) {
  const { token, slug } = props;
  const splitted = slug?.split("-");
  const maybeSkuId = Number(splitted[splitted.length - 1]);

  const options = {
    method: "GET",
    headers: {
      "X-Shopify-Access-Token": token,
    },
  };

  const { variant } = await fetch(
    `https://904137.myshopify.com/admin/api/2024-01/variants/${maybeSkuId}.json`,
    options,
  ).then((response) => response.json());

  const metafieldsUrl =
    "https://904137.myshopify.com/admin/api/2024-01/metafields.json";
  const metafieldsParams = {
    "metafield[owner_id]": `${variant.product_id}`,
    "metafield[owner_resource]": "product",
  };
  const queryString = new URLSearchParams(metafieldsParams).toString();

  const { metafields } = await fetch(
    `${metafieldsUrl}?${queryString}`,
    options,
  ).then((response) => response.json());

  return { metafields };
}

const ProductMetaFields = ({ metafields }: SectionProps<typeof loader>) => {
  const paramName = (paramKey: string) => {
    switch (paramKey) {
      case "formato_":
        return "Formato:";
      case "tamanho_do_arquivo_":
        return "Tamanho do arquivo:";
      case "n_mero_de_p_ginas_":
        return "Número de páginas:";
      case "autor_":
        return "Autor:";
      case "vendido_por_":
        return "Vendido Por:";
      case "idioma_":
        return "Idioma:";
      case "dicas_de_vocabul_rio_":
        return "Dicas de vocabulário:";
    }
  };

  return (
    <div class="mb-5">
      {metafields.map((metafield: Metafild, index: number) => (
        <p
          key={index}
          class="text-[#444] text-center text-[15px] leading-6 lg:text-left"
        >
          <span class="font-semibold">{paramName(metafield.key)}</span>
          {metafield.value}
        </p>
      ))}
    </div>
  );
};

export default ProductMetaFields;
