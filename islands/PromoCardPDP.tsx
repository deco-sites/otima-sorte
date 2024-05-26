import { invoke } from "../runtime.ts";
import { useCallback, useEffect, useState } from "preact/hooks";

//@ts-ignore
const PromoCardPDP = ({ id }: { id: string }) => {
  const [collectionInfos, setCollectionInfos] = useState();

  const getVariants = useCallback(async ({ id }: { id: string }) => {
    const data = await invoke[
      "deco-sites/otima-sorte"
    ].actions.product.getVariants({ id });

    return data;
  }, []);

  useEffect(() => {
    const fetchVariants = async () => {
      const productVariant = await getVariants({ id });
      setCollectionInfos(productVariant.product.collections.nodes[0]);
      console.log("prod vari", productVariant);
    };

    fetchVariants();
  }, []);

  return (
    <div class="bg-[#F6F6F6] border-[3px] border-[#F2970E] rounded-lg py-3 px-[15px] flex gap-[15px] items-start mb-4 lg:max-w-[410px]">
      <img src={collectionInfos?.image.url} alt="" className="h-[60px]"/>
      <div>
        <h1 class="text-[#444] text-[17px] leading-[22px] mb-1">
          <span class="font-semibold">PROMO:</span> {collectionInfos?.title}
        </h1>
        <p class="text-[#444] text-[13px] font-semibold leading-[18px]">
          {collectionInfos?.description}
        </p>
      </div>
    </div>
  );
};

export default PromoCardPDP;
