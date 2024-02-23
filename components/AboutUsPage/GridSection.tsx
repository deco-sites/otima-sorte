import type { ImageWidget } from "apps/admin/widgets.ts";

interface Image {
  image: ImageWidget;
  alt: string;
}

export interface Props {
  banners?: Image[];
  title?: string;
  text?: string;
}

const DEFAULT_PROPS = {
  banners: [
    {
      image: "https://fakeimg.pl/300x270",
      alt: "",
    },
    {
      image: "https://fakeimg.pl/300x270",
      alt: "",
    },
    {
      image: "https://fakeimg.pl/300x270",
      alt: "",
    },
    {
      image: "https://fakeimg.pl/300x270",
      alt: "",
    },
  ],
  title: "TÍTULO EXEMPLO",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
};

const GridSection = (props: Props) => {
  const { banners, title, text } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="mb-[73px] lg:px-[15px]">
      <div class="max-w-[1270px] mx-auto">
        <div class="grid grid-cols-2 grid-rows-2 gap-x-[11px] gap-y-[23px] px-[15px] mb-[36px] lg:px-0 lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-[23px] lg:mb-[63px]">
          {banners?.map((banner, index) => (
            <img src={banner.image} alt={banner.alt} key={index} />
          ))}
        </div>
        <div class="px-10 lg:px-0">
          <h1 class="text-[#2E385F] text-center text-[17px] font-bold leading-5 mb-7 lg:text-start">
            {title}
          </h1>
          <p class="text-[#444] text-[13px] leading-5 text-center lg:text-start">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
