import { useCallback, useEffect, useState } from "preact/hooks";
import { invoke } from "../runtime.ts";
import { useSignal } from "@preact/signals";

//@ts-ignore ignore
const SearchPreview = ({ query }) => {
  const products = useSignal([]);
  const activeProducts = useSignal([]);
  const [windowWidth, setWindowWidth] = useState(globalThis.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(globalThis.innerWidth);
    };

    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);

  const getProducts = useCallback(
    async ({ queryText }: { queryText: string }) => {
      const data = await invoke[
        "deco-sites/otima-sorte"
      ].actions.product.searchPreview({ queryText });

      return data;
    },
    [],
  );

  //@ts-ignore ignore
  useEffect(async () => {
    const queryText = query.value;
    const previewProducts = await getProducts({ queryText });
    products.value = previewProducts;
  }, [query.value]);

  useEffect(() => {
    if (products.value.length) {
      activeProducts.value = products.value.filter(
        //@ts-ignore ignore
        (product) => product.status === "ACTIVE",
      );
    }
  }, [products.value]);

  return (
    <div class="grid grid-cols-1 lg:grid-cols-2 mb-[108px] lg:mb-0 gap-y-[19px] gap-x-[100px]">
      {activeProducts.value.length > 0 &&
        query.value.length > 3 &&
        activeProducts.value.map((product, index) => {
          if (windowWidth < 1024) {
            if (index <= 1) {
              return <ProductCard product={product} />;
            }
          } else {
            return <ProductCard product={product} />;
          }
        })}
    </div>
  );
};

//@ts-ignore ignore
const ProductCard = ({ product }) => {
  const extractId = (gid: string) => {
    const numbers = gid.match(/\d+/g);
    return numbers?.join("");
  };

  return (
    <div
      class="flex gap-[18px]"
      onClick={() => {
        location.href = `/products/${product.handle}-${
          extractId(
            product.variants.nodes[0].id,
          )
        }`;
      }}
    >
      <img
        class="max-w-[74px]"
        src={product.featuredImage?.url}
        alt={product.featuredImage?.altText}
      />
      <div>
        <p class="text-[#444444] text-base leading-normal">
          {product.title} {product.variants.nodes[0].sku}
        </p>
        <div class="flex items-center gap-[13px]">
          <p class="text-[#686868] text-[13px] leading-normal line-through">
            {product.variants.nodes[0].compareAtPrice}
          </p>
          <p class="text-[#2E385F] text-[17px] leading-normal font-bold uppercase">
            {product.variants.nodes[0].price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchPreview;
