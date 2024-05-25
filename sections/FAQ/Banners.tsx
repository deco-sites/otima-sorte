import type { ImageWidget } from "apps/admin/widgets.ts";

export interface BannersProps {
  left?: ImageWidget;
  right?: ImageWidget;
}

const DEFAULT_PROPS = {
  left: "https://fakeimg.pl/623x231/00ff40/ffffff",
  right: "https://fakeimg.pl/623x231/00ff40/ffffff",
};

const Banners = (props: BannersProps) => {
  const { left, right } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="px-[15px] mb-[60px] lg:mb-[203px]">
      <div class="max-w-[1270px] mx-auto flex flex-col items-center gap-2 lg:flex-row lg:justify-between lg:gap-[22px]">
        <a href="">
          <img src={left} alt="" class="rounded-2xl" />
        </a>
        <a href="">
          <img src={right} alt="" class="rounded-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Banners;
