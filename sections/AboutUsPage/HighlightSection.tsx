import type { ImageWidget } from "apps/admin/widgets.ts";

interface Image {
  image: ImageWidget;
  alt: string;
}

export interface Props {
  banner?: Image;
  title?: string;
  text?: string;
  link?: string;
}

const DEFAULT_PROPS = {
  banner: {
    image: "https://fakeimg.pl/626x416",
    alt: "",
  },
  title: "TÍTULO EXEMPLO",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  link: "/",
};

const HighlightSection = (props: Props) => {
  const { banner, title, text, link } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="px-[15px] bg-[#2E385F] pt-6 pb-[33px] lg:pt-[37px] lg:pb-[43px] mb-[36px] lg:mb-[58px]">
      <div class="max-w-[1270px] mx-auto lg:flex lg:gap-[25px] lg:items-center">
        <img
          src={banner.image}
          alt={banner.alt}
          class="mb-[19px] rounded-[10px]"
        />
        <div>
          <h1 class="text-white text-center text-[17px] font-bold leading-5 mb-[30px] lg:text-start">
            {title}
          </h1>
          <p class="text-white text-[13px] leading-5 text-center lg:text-start lg:font-medium mb-7">
            {text}
          </p>
          <a
            href={link}
            class="bg-white rounded-lg mx-auto flex items-center justify-center w-full max-w-[157px] h-[35px] text-[#2E385F] text-sm font-medium leading-normal lg:mx-0"
          >
            SAIBA MAIS
          </a>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
