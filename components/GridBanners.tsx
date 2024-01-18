import type { ImageWidget } from "apps/admin/widgets.ts";

export interface GridBannersProps {
  topLeftMobile?: ImageWidget;
  topLeftDesktop?: ImageWidget;
  topRight?: ImageWidget;
  middleLeft?: ImageWidget;
  middleCenter?: ImageWidget;
  middleRight?: ImageWidget;
  bottomMobile?: ImageWidget;
  bottomDesktop?: ImageWidget;
}

const DEFAULT_PROPS = {
  topLeftMobile: "https://fakeimg.pl/517x310",
  topLeftDesktop: "https://fakeimg.pl/733x330",
  topRight: "https://fakeimg.pl/517x330",
  middleLeft: "https://fakeimg.pl/517x517",
  middleCenter: "https://fakeimg.pl/517x517",
  middleRight: "https://fakeimg.pl/517x517",
  bottomMobile: "https://fakeimg.pl/517x410",
  bottomDesktop: "https://fakeimg.pl/1270x261",
};

const GridBanners = (props: GridBannersProps) => {
  const {
    topLeftMobile,
    topLeftDesktop,
    topRight,
    middleLeft,
    middleCenter,
    middleRight,
    bottomMobile,
    bottomDesktop,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="px-[15px] lg:bg-[#F6F6F6] py-[26px] lg:pt-[58px] lg:pb-[50px]">
      <div class="max-w-[517px] mx-auto lg:max-w-[1270px] flex flex-col gap-[18px] lg:gap-[23px]">
        <div class="flex flex-col gap-[18px] lg:flex-row lg:gap-5">
          <img src={topLeftMobile} alt="" class="lg:hidden min-w-0" />
          <img src={topLeftDesktop} alt="" class="hidden lg:block min-w-0" />
          <img src={topRight} alt="" class="min-w-0" />
        </div>
        <div class="flex flex-col gap-[18px] lg:flex-row lg:gap-5">
          <img src={middleLeft} alt="" class="min-w-0" />
          <img src={middleCenter} alt="" class="min-w-0" />
          <img src={middleRight} alt="" class="min-w-0" />
        </div>
        <div>
          <img src={bottomMobile} alt="" class="lg:hidden" />
          <img src={bottomDesktop} alt="" class="hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default GridBanners;
