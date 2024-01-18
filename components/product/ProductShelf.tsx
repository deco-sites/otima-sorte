import { SendEventOnView } from "$store/components/Analytics.tsx";
import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import SwiperShelf from "$store/islands/SwiperShelf.tsx";

export interface Props {
  products: Product[] | null;
  title?: string;
  description?: string;
  layout?: {
    numberOfSliders?: {
      mobile?: 1 | 2 | 3 | 4 | 5;
      desktop?: 1 | 2 | 3 | 4 | 5;
    };
    headerAlignment?: "center" | "left";
    headerfontSize?: "Normal" | "Large" | "Small";
    showArrows?: boolean;
  };
  cardLayout?: cardLayout;
}

function ProductShelf({ products, title, cardLayout }: Props) {
  const id = useId();
  const platform = usePlatform();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <>
      <div class="w-full max-w-[1309px] mx-auto py-8 flex flex-col gap-5 lg:py-10">
        <h1 class="text-[#2E385F] text-center text-xl font-semibold leading-normal lg:text-[27px]">
          {title}
        </h1>

        <div id={id}>
          <SwiperShelf
            products={products}
            title={title}
            cardLayout={cardLayout}
            platform={platform}
          />
        </div>

        <div id={id}>
          <SendEventOnView
            id={id}
            event={{
              name: "view_item_list",
              params: {
                item_list_name: title,
                items: products.map((product, index) =>
                  mapProductToAnalyticsItem({
                    index,
                    product,
                    ...useOffer(product.offers),
                  })
                ),
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ProductShelf;
