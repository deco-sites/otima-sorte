import type { SectionProps } from "deco/mod.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { AppContext } from "apps/shopify/mod.ts";

export interface Props {
  id: string;
  banner?: ImageWidget;
  link?: string;
}

const DEFAULT_PROPS = {
  banner: "https://fakeimg.pl/624x360",
  link: "/",
};

export async function loader(props: Props, _req: Request, ctx: AppContext) {
  const { id, banner, link } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const options = {
    method: "GET",
    headers: {
      "X-Shopify-Access-Token": ctx.tokenAdminCustom.get(),
    },
  };

  const { product } = await fetch(
    `https://${ctx.storeNameCustom}.myshopify.com/admin/api/2024-01/products/${id}.json`,
    options,
  ).then((response) => response.json());

  return { product, banner, link };
}

function calculateDiscount(currentPrice: number, originalPrice: number) {
  const discount = originalPrice - currentPrice;

  const discountPercent = (discount / originalPrice) * 100;

  return discountPercent;
}

export default function DogFacts({
  product,
  banner,
  link,
}: SectionProps<typeof loader>) {
  const currentPrice = product?.variants[0].price;
  const originalPrice = product?.variants[0].compare_at_price;

  return (
    <div class="bg-[#2E385F] px-[15px] pt-[13px] pb-[50px] lg:pt-[50px] lg:pb-[78px]">
      <div class="flex flex-col items-center lg:flex-row lg:gap-[31px] max-w-[1270px] mx-auto lg:items-start">
        <img src={banner} alt="" class="rounded-2xl mb-[18px] lg:mb-0" />
        <div class="flex flex-col items-center lg:items-start">
          <div class="border border-[#6DC04B] rounded-[5px] h-[28px] w-fit px-3 mb-[10px] flex items-center justify-center">
            <p class="text-[#6DC04B] text-[13px] font-bold tracking-[0.65px] leading-normal">
              {calculateDiscount(currentPrice, originalPrice)}% OFF
            </p>
          </div>
          <p class="text-white text-xl text-center leading-normal mb-[10px]">
            <span class="font-semibold">eBook:</span> {product?.title}
          </p>
          <p class="text-white text-[13px] leading-[17px] text-center mb-[18px] lg:text-start">
            {product?.body_html}
          </p>
          <div class="flex items-center gap-[23px] mb-[13px]">
            <p class="text-white text-[13px] leading-normal line-through">
              R$ {currentPrice}
            </p>
            <p class="text-white text-[17px] font-bold leading-normal">
              R$ {originalPrice}
            </p>
          </div>
          <a
            href={link}
            class="bg-[#6DC04B] h-[45px] w-full max-w-[276px] flex items-center justify-center text-white text-[15px] font-bold leading-normal rounded-lg"
          >
            SAIBA MAIS
          </a>
        </div>
      </div>
    </div>
  );
}
