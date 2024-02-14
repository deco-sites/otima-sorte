import { ProductDetailsPage } from "apps/commerce/types.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Image {
  image: ImageWidget;
  alt: string;
}

interface Props {
  page: ProductDetailsPage | null;
  banner?: Image;
}

const DEFAULT_PROPS = {
  banner: {
    image: "https://fakeimg.pl/253x380",
    alt: "",
  },
};

const ProductDescription = (props: Props) => {
  const { page, banner } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  /* @ts-ignore */
  const { product } = page;

  return (
    <div class="pt-5 pb-[98px] px-[15px]">
      <div class="flex flex-col max-w-[950px] mx-auto">
        <h1 class="text-[#2E385F] text-center text-[22px] font-semibold leading-normal mb-5">
          Descrição
        </h1>
        <div class="flex flex-col items-center lg:flex-row lg:gap-10 lg:items-start">
          <div class="px-[95px] mb-[25px] lg:px-0 lg:mb-0 lg:w-full lg:max-w-[253px]">
            <img src={banner?.image} alt={banner?.alt} />
          </div>
          <div class="lg:pt-[17px]">
            <p class="text-[#686868] text-center text-[13px] leading-5 lg:text-left">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
