import type { ImageWidget } from "apps/admin/widgets.ts";

interface Image {
  image: ImageWidget;
  alt: string;
}

export interface Props {
  banner?: Image;
  prizeName: string;
  prizeImage?: Image;
  prizeDescription?: string;
}

const DEFAULT_PROPS = {
  banner: {
    image: "https://fakeimg.pl/1058x666",
    alt: "",
  },
  prizeName: "iPhone 15 PRO MAX",
  prizeImage: {
    image: "https://fakeimg.pl/317x394",
    alt: "",
  },
  prizeDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
};

const PromoPrizeDescription = (props: Props) => {
  const { banner, prizeName, prizeImage, prizeDescription } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="mb-[45px] lg:mb-[54px]">
      <div class="max-w-[1920px] mx-auto lg:flex lg:items-center gap-[88px]">
        <img
          src={banner.image}
          alt={banner.alt}
          class="mb-[26px] lg:mb-0 w-full lg:max-w-[55.10%]"
        />
        <div class="lg:max-w-[376px]">
          <h1 class="text-[#444] text-center text-[15px] font-semibold leading-[18px] mb-[17px]">
            {prizeName}
          </h1>
          <div class="px-[64px] mb-[26px] lg:px-0">
            <img
              src={prizeImage.image}
              alt={prizeImage.alt}
              class="lg:mx-auto"
            />
          </div>
          <p class="text-[#686868] text-center text-[13px] leading-5 px-[23px] lg:px-0 lg:text-left">
            {prizeDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPrizeDescription;
