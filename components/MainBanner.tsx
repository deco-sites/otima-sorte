import {
  SendEventOnClick,
  SendEventOnView,
} from "$store/components/Analytics.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  /** @description Image's alt text */
  alt: string;
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Show arrows
   * @description show arrows to navigate through the images
   */
  arrows?: boolean;
  /**
   * @title Show dots
   * @description show dots to navigate through the images
   */
  dots?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  images: [
    {
      alt: "",
      mobile: "https://fakeimg.pl/860x1180/ebb6f5/ffffff",
      desktop: "https://fakeimg.pl/1920x576/ebb6f5/ffffff",
    },
    {
      alt: "",
      mobile: "https://fakeimg.pl/860x1180/ebb6f5/ffffff",
      desktop: "https://fakeimg.pl/1920x576/ebb6f5/ffffff",
    },
    {
      alt: "",
      mobile: "https://fakeimg.pl/860x1180/ebb6f5/ffffff",
      desktop: "https://fakeimg.pl/1920x576/ebb6f5/ffffff",
    },
    {
      alt: "",
      mobile: "https://fakeimg.pl/860x1180/ebb6f5/ffffff",
      desktop: "https://fakeimg.pl/1920x576/ebb6f5/ffffff",
    },
    {
      alt: "",
      mobile: "https://fakeimg.pl/860x1180/ebb6f5/ffffff",
      desktop: "https://fakeimg.pl/1920x576/ebb6f5/ffffff",
    },
    {
      alt: "",
      mobile: "https://fakeimg.pl/860x1180/ebb6f5/ffffff",
      desktop: "https://fakeimg.pl/1920x576/ebb6f5/ffffff",
    },
  ],
  preload: true,
  arrows: true,
  dots: true,
};

function BannerItem({
  image,
  lcp,
  id,
}: {
  image: Banner;
  lcp?: boolean;
  id: string;
}) {
  const { alt, mobile, desktop } = image;

  return (
    <a id={id} class="relative overflow-y-hidden w-full">
      <Picture preload={lcp}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={430}
          height={590}
        />
        <Source
          media="(min-width: 768px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={1920}
          height={576}
        />
        <img
          class="object-cover w-full h-full"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>
    </a>
  );
}

function Dots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel justify-center col-span-full gap-[6px] z-10 row-start-4">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div class="w-3 h-3 rounded-full opacity-50 bg-white group-disabled:opacity-100" />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div class="items-center justify-center z-10 col-start-1 row-start-2 hidden lg:flex">
        <Slider.PrevButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
          >
            <rect
              x="0.711914"
              y="0.712402"
              width="49"
              height="49"
              rx="4.5"
              fill="#2E385F"
              stroke="white"
            />
            <path
              d="M29.926 34.6403L20.4979 25.2123L29.926 15.7842"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Slider.PrevButton>
      </div>
      <div class="items-center justify-center z-10 col-start-3 row-start-2 hidden lg:flex">
        <Slider.NextButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
          >
            <rect
              x="-0.5"
              y="0.5"
              width="49"
              height="49"
              rx="4.5"
              transform="matrix(-1 0 0 1 49.4141 0.212402)"
              fill="#2E385F"
              stroke="white"
            />
            <path
              d="M20.7 34.6403L30.128 25.2123L20.7 15.7842"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Slider.NextButton>
      </div>
    </>
  );
}

const MainBanner = (props: Props) => {
  const id = useId();
  const { images, preload, arrows, dots, interval } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] max-w-[1920px] mx-auto"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full">
        {images?.map((image, index) => {
          const params = { promotion_name: image.alt };

          return (
            <Slider.Item index={index} class="carousel-item w-full">
              <BannerItem
                image={image}
                lcp={index === 0 && preload}
                id={`${id}::${index}`}
              />
              <SendEventOnClick
                id={`${id}::${index}`}
                event={{ name: "select_promotion", params }}
              />
              <SendEventOnView
                id={`${id}::${index}`}
                event={{ name: "view_promotion", params }}
              />
            </Slider.Item>
          );
        })}
      </Slider>

      {arrows && <Buttons />}

      {dots && <Dots images={images} interval={interval} />}

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
};

export default MainBanner;
