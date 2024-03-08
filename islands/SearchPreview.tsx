import { useCallback, useEffect, useState } from "preact/hooks";
import { invoke } from "../runtime.ts";
import { useSignal } from "@preact/signals";

const SearchPreview = ({ query }) => {
  const products = useSignal([]);
  const activeProducts = useSignal([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getProducts = useCallback(
    async ({ queryText }: { queryText: string }) => {
      const data = await invoke[
        "deco-sites/otima-sorte"
      ].actions.product.searchPreview({ queryText });

      return data;
    },
    []
  );

  useEffect(async () => {
    const queryText = query.value;
    const previewProducts = await getProducts({ queryText });
    products.value = previewProducts;
  }, [query.value]);

  useEffect(() => {
    if (products.value.length) {
      activeProducts.value = products.value.filter(
        (product) => product.status === "ACTIVE"
      );
    }
  }, [products.value]);

  const extractId = (gid: string) => {
    var numbers = gid.match(/\d+/g);
    return numbers?.join("");
  };

  return (
    <div class="grid grid-cols-1 lg:grid-cols-2 mb-[108px] lg:mb-0 gap-y-[19px]">
      {activeProducts.value.length > 0 &&
        activeProducts.value.map((product, index) => {
          if (windowWidth < 1024) {
            if (index <= 1) {
              return (
                <div
                  key={index}
                  class="flex"
                  onClick={() => {
                    location.href = `/products/${product.handle}-${extractId(
                      product.variants.nodes[0].id
                    )}`;
                  }}
                >
                  <img
                    class="max-w-[74px]"
                    src={product.featuredImage?.url}
                    alt={product.featuredImage?.altText}
                  />
                  <div>
                    <p>
                      {product.title} {product.variants.nodes[0].sku}
                    </p>
                    <div>
                      <p>{product.variants.nodes[0].compareAtPrice}</p>
                      <p>{product.variants.nodes[0].price}</p>
                    </div>
                  </div>
                </div>
              );
            }
          } else {
            return (
              <div
                key={index}
                class="flex"
                onClick={() => {
                  location.href = `/products/${product.handle}-${extractId(
                    product.variants.nodes[0].id
                  )}`;
                }}
              >
                <img
                  class="max-w-[74px]"
                  src={product.featuredImage?.url}
                  alt={product.featuredImage?.altText}
                />
                <div>
                  <p>
                    {product.title} {product.variants.nodes[0].sku}
                  </p>
                  <div>
                    <p>{product.variants.nodes[0].compareAtPrice}</p>
                    <p>{product.variants.nodes[0].price}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default SearchPreview;
