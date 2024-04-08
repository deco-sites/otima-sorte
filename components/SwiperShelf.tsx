import type { Product } from "apps/commerce/types.ts";
import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import { useEffect, useState } from "preact/hooks";
import type { Platform } from "$store/apps/site.ts";

export interface Props {
  products: Product[] | null;
  title?: string;
  cardLayout?: cardLayout;
  platform: Platform;
}

const SwiperShelf = ({ products, title, cardLayout, platform }: Props) => {
  const [windowSize, setWindowSize] = useState(globalThis.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(globalThis.innerWidth);
    };

    addEventListener("resize", handleWindowResize);

    return () => {
      removeEventListener("resize", handleWindowResize);
    };
  }, []);

  let slidesNumber = 2;

  if (windowSize >= 1024) {
    slidesNumber = 4;
  } else if (windowSize >= 768 && windowSize < 1024) {
    slidesNumber = 3;
  }

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            swiper-container::part(container) {
              padding-inline: 21px;
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
      {/* @ts-ignore */}
      <swiper-container
        slides-per-view={`${slidesNumber}`}
        slides-per-group={`${slidesNumber}`}
        loop="true"
        navigation="true"
        pagination="true"
        space-between="21"
      >
        {products?.map((product, index) => (
          /* @ts-ignore */
          <swiper-slide key={index}>
            <ProductCard
              product={product}
              itemListName={title}
              layout={cardLayout}
              platform={platform}
              index={index}
            />
            {/* @ts-ignore */}
          </swiper-slide>
        ))}
        {/* @ts-ignore */}
      </swiper-container>
    </>
  );
};

export default SwiperShelf;
