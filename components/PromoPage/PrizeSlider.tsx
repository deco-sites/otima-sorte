import { useEffect, useState } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Image {
  image: ImageWidget;
  alt: string;
  link: string;
}

export interface Props {
  images?: Image[];
}

const DEFAULT_PROPS = {
  images: [
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
    {
      image: "https://fakeimg.pl/413x324",
      alt: "",
      link: "",
    },
  ],
};

const PrizeSlider = (props: Props) => {
  const { images } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    addEventListener("resize", handleWindowResize);

    return () => {
      removeEventListener("resize", handleWindowResize);
    };
  }, []);

  let slidesNumber = 1;

  if (windowSize >= 1024) {
    slidesNumber = 3;
  }

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            swiper-container::part(container) {
              padding-inline: 23px;
              padding-bottom: 62px;
              width: auto;
            }
            swiper-container::part(button-prev),
            swiper-container::part(button-next) {
              width: 0;
              height: 0;
              overflow: visible;
            }
            swiper-container::part(button-prev) {
              left: 25px;
            }
            swiper-container::part(button-next) {
              right: 25px;
            }
            swiper-container::part(button-prev)::before,
            swiper-container::part(button-next)::before {
              content: "";
              min-width: 50px;
              min-height: 50px;
            }
            swiper-container::part(button-prev)::before {
              background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none"><rect x="0.944336" y="1.00366" width="49" height="49" rx="4.5" fill="%232E385F" stroke="white"/><path d="M30.1584 34.9317L20.7304 25.5036L30.1584 16.0756" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
            }
            swiper-container::part(button-next)::before {
              background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none"><rect x="-0.5" y="0.5" width="49" height="49" rx="4.5" transform="matrix(-1 0 0 1 49.4141 0.503662)" fill="%232E385F" stroke="white"/><path d="M20.7 34.9317L30.128 25.5036L20.7 16.0756" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
            }
            swiper-container::part(pagination) {
              bottom: 23px;
            }
            swiper-container::part(bullet) {
              width: 13px;
              height: 13px;
              background: rgba(160, 160, 160, 0.5);
            }
            swiper-container::part(bullet-active) {
              width: 13px;
              height: 13px;
              background: #2e385f;
            }                                     
          `,
        }}
      />
      <div class="bg-[#F6F6F6] pt-5 pb-[34px] mb-[26px] lg:mb-[71px]">
        <div class="max-w-[1313px] mx-auto">
          {/* @ts-ignore */}
          <swiper-container
            slides-per-view={`${slidesNumber}`}
            slides-per-group={`${slidesNumber}`}
            loop="true"
            navigation="true"
            pagination="true"
            space-between="23"
          >
            {images.map((image, index) => (
              /* @ts-ignore */
              <swiper-slide key={index}>
                <a href={image.link} class="flex justify-center">
                  <img src={image.image} alt={image.alt} class="rounded-2xl" />
                </a>
                {/* @ts-ignore */}
              </swiper-slide>
            ))}
            {/* @ts-ignore */}
          </swiper-container>
        </div>
      </div>
    </>
  );
};

export default PrizeSlider;
