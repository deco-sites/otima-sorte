import type { ImageWidget } from "apps/admin/widgets.ts";
import RichText from "$store/sections/Content/RichText.tsx";

interface Image {
  image: ImageWidget;
  alt: string;
}

export interface Props {
  banner?: Image;
  productImage?: Image;
  title?: string;
  caption?: string;
  description?: string;
  highlightText?: string;
  link?: string;
}

const DEFAULT_PROPS = {
  banner: {
    image: "https://fakeimg.pl/693x552",
    alt: "",
  },
  productImage: {
    image: "https://fakeimg.pl/155x192",
    alt: "",
  },
  title: "iPhone na mão",
  caption:
    '<p class="text-[#444] text-[15px] leading-[18px]"> Concorra a um <span class="font-semibold">iPhone 15 PRO MAX - 512GB</span></p>',
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  highlightText: "Quanto mais eBooks comprar, mais chances terá de ganhar!",
  link: "/",
};

const PromotionInfosPDP = (props: Props) => {
  const {
    banner,
    productImage,
    title,
    caption,
    description,
    highlightText,
    link,
  } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="bg-[#F6F6F6] py-[33px] px-[15px]">
      <div class="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-[60px] max-w-[1270px] mx-auto">
        <img src={banner.image} alt={banner.alt} class="mb-[25px] lg:mb-0" />
        <div class="flex flex-col items-center lg:items-start">
          <img
            src={productImage.image}
            alt={productImage.alt}
            class="mb-[14px]"
          />
          <p class="text-[#444] text-center text-[22px] leading-[22px] mb-[20px]">
            <span class="font-semibold">PROMO:</span> {title}
          </p>
          <div class="mb-[14px]">
            <RichText text={caption} />
          </div>
          <p class="text-[#686868] text-center text-[13px] leading-5 mb-[18px] lg:text-left">
            {description}
          </p>
          <p class="text-[#F2970E] text-center text-base font-semibold leading-[18px] mb-6">
            {highlightText}
          </p>
          <a
            href={link}
            class="flex items-center justify-center w-full max-w-[157px] h-[35px] bg-[#2E385F] rounded-lg"
          >
            <span class="text-white text-sm font-medium leading-normal">
              SAIBA MAIS
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromotionInfosPDP;
