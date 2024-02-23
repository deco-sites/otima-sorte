import type { ImageWidget } from "apps/admin/widgets.ts";

interface Image {
  image: ImageWidget;
  alt: string;
}

export interface Props {
  title?: string;
  description?: string;
  banner?: Image;
}

const DEFAULT_PROPS = {
  title: "Título exemplo",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  banner: {
    image: "https://fakeimg.pl/626x433",
    alt: "",
  },
};

const PromoPrizeDescription2 = (props: Props) => {
  const { title, description, banner } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="mb-[25px] lg:mb-[30px]">
      <div class="max-w-[1270px] mx-auto flex flex-col-reverse lg:flex-row lg:justify-between">
        <div class="px-[23px] lg:px-0 lg:max-w-[532px]">
          <h1 class="text-[#444] text-center text-base font-semibold leading-[18px] mb-[25px] lg:text-left">
            {title}
          </h1>
          <p class="text-[#686868] text-[13px] leading-5 text-center lg:text-left">
            {description}
          </p>
        </div>
        <div class="px-[15px] mb-[26px] lg:px-0 lg:mb-0">
          <img src={banner.image} alt={banner.alt} />
        </div>
      </div>
    </div>
  );
};

export default PromoPrizeDescription2;
