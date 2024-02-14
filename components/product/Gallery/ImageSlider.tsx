import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import { ProductDetailsPage } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** @title Integration */
  page: ProductDetailsPage | null;

  layout: {
    width: number;
    height: number;
  };
}

interface Image {
  "@type": string;
  alternateName: string;
  url: string;
}

/**
 * @title Product Image Slider
 * @description Creates a three columned grid on destkop, one for the dots preview, one for the image slider and the other for product info
 * On mobile, there's one single column with 3 rows. Note that the orders are different from desktop to mobile, that's why
 * we rearrange each cell with col-start- directives
 */
export default function GallerySlider(props: Props) {
  const id = useId();

  if (props.page === null) {
    throw new Error("Missing Product Details Page Info");
  }

  const {
    page: {
      product: {
        /* @ts-ignore */
        isVariantOf: { image: images = [] },
      },
    },
    layout: { width, height },
  } = props;
  const aspectRatio = `${width} / ${height}`;

  return (
    <>
      <div class="lg:hidden" id="pdp-swiper">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            swiper-container::part(container) {
              padding-bottom: 64px;
            }
            swiper-container::part(button-prev),
            swiper-container::part(button-next) {
              width: 0;
              height: 0;
              overflow: visible;
            }
            swiper-container::part(button-prev) {
              left: 35px;
            }
            swiper-container::part(button-next) {
              right: 35px;
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
              bottom: 26px;
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
        {/* @ts-ignore */}
        <swiper-container
          slides-per-view={1}
          slides-per-group={1}
          loop="true"
          navigation="true"
          pagination="true"
          space-between="0"
        >
          {images?.map((img: Image, index: number) => (
            /* @ts-ignore */
            <swiper-slide key={index}>
              <div class="px-[78px]">
                <img src={img.url} alt={img.alternateName} class="mx-auto" />
              </div>
              {/* @ts-ignore */}
            </swiper-slide>
          ))}
          {/* @ts-ignore */}
        </swiper-container>
      </div>

      <div id={id} class="max-w-[497px] hidden lg:flex">
        {/* Dots */}
        <ul class="flex flex-col gap-3 mr-5">
          {images.map((img: Image, index: number) => (
            <li class="w-[87px] h-[131px]">
              <Slider.Dot index={index}>
                <Image width={87} src={img.url!} alt={img.alternateName} />
              </Slider.Dot>
            </li>
          ))}
        </ul>

        {/* Image Slider */}
        <Slider class="carousel carousel-center">
          {images.map((img: Image, index: number) => (
            <Slider.Item index={index} class="carousel-item w-full">
              <Image
                width={390}
                src={img.url!}
                alt={img.alternateName}
                // Preload LCP image for better web vitals
                preload={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </Slider.Item>
          ))}
        </Slider>

        <SliderJS rootId={id} />
      </div>
    </>
  );
}
