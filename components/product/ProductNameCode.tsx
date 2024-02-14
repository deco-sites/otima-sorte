import { ProductDetailsPage } from "apps/commerce/types.ts";

interface Props {
  page: ProductDetailsPage | null;
}

function ProductNameCode({ page }: Props) {
  /* @ts-ignore */
  const { product } = page;

  const { name = "", gtin } = product;

  return (
    <div class="mb-4">
      <p class="text-[#444] text-center text-xl leading-[25px] mb-4 lg:text-left">
        {product?.isVariantOf?.name}
      </p>
      <p class="text-[#444] text-center text-[11px] leading-normal lg:text-left">
        Cod.: {gtin ? gtin : "placeholder"}
      </p>
    </div>
  );
}

export default ProductNameCode;
