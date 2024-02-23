import type { ImageWidget } from "apps/admin/widgets.ts";
import RichText from "$store/sections/Content/RichText.tsx";

interface Image {
  image: ImageWidget;
  alt: string;
}

export interface Props {
  banner?: Image;
  text?: string;
}

const DEFAULT_PROPS = {
  banner: {
    image: "https://fakeimg.pl/1270x582",
    alt: "",
  },
  text:
    '<p class="text-[#444] text-center text-[13px] leading-5 lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>',
};

const TopSection = (props: Props) => {
  const { banner, text } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="px-[15px] mb-10">
      <div class="max-w-[1270px] mx-auto">
        <img
          src={banner.image}
          alt={banner.alt}
          class="rounded-[10px] mb-[23px] lg:mb-[26px]"
        />
        <p class="text-[#444] text-center text-[13px] leading-5">
          <RichText text={text} />
        </p>
      </div>
    </div>
  );
};

export default TopSection;
