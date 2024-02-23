import type { ImageWidget } from "apps/admin/widgets.ts";

interface Image {
  image: ImageWidget;
  alt: string;
}

export interface Props {
  mainImage: Image;
  promoName: string;
  oneImage: Image;
  fiveImage: Image;
  tenImage: Image;
}

const DEFAULT_PROPS = {
  mainImage: {
    image: "https://fakeimg.pl/99x106",
    alt: "",
  },
  promoName: "iPhone na mão",
  oneImage: {
    image: "https://fakeimg.pl/86x65",
    alt: "",
  },
  fiveImage: {
    image: "https://fakeimg.pl/86x65",
    alt: "",
  },
  tenImage: {
    image: "https://fakeimg.pl/86x65",
    alt: "",
  },
};

const PromoQuantitySelector = (props: Props) => {
  const { mainImage, promoName, oneImage, fiveImage, tenImage } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="px-[15px] mb-[25px] lg:mb-[33px]">
      <div class="bg-[#F6F6F6] max-w-[1270px] mx-auto pt-3 px-[6px] pb-10 lg:flex lg:justify-between lg:gap-20 rounded-lg lg:py-[34px] lg:px-[11px]">
        <div class="flex items-start justify-between mb-10 lg:mb-0 lg:gap-[22px]">
          <img src={mainImage.image} alt={mainImage.alt} />
          <div class="max-w-[205px] lg:max-w-none">
            <h1 class="text-lg leading-[22px] text-[#2E385F] mb-2">
              <span class="text-[#F2970E] font-semibold">PROMO:</span>{" "}
              {promoName}
            </h1>
            <p class="text-[#2E385F] text-sm leading-[18px]">Compre o eBook:</p>
            <p class="text-[#2E385F] text-sm leading-[18px] font-semibold mb-2">
              Produto para teste de layout para exemplo*
            </p>
            <div class="bg-[#F2970E] rounded-lg w-full h-[30px] flex items-center justify-center">
              <p class="text-white text-[11px] font-bold leading-normal tracking-[0.55px]">
                E GANHE NÚMEROS DA SORTE
              </p>
            </div>
          </div>
        </div>
        <div class="pl-[26px] pr-[14px] flex flex-col gap-[30px] lg:flex-row lg:gap-[15px] lg:justify-between lg:pl-0 lg:pr-0 lg:flex-grow">
          <QuantityCard image={oneImage} quantity={1} />
          <QuantityCard image={fiveImage} quantity={5} />
          <QuantityCard image={tenImage} quantity={10} />
        </div>
      </div>
    </div>
  );
};

const QuantityCard = ({
  image,
  quantity,
}: {
  image: Image;
  quantity: number;
}) => {
  return (
    <div class="flex justify-between items-center lg:flex-col lg:w-full lg:item">
      <div class="lg:mb-[11px]">
        <img src={image.image} alt={image.alt} class="mb-[14px]" />
        <p class="text-[#2E385F] text-lg font-bold leading-[18px]">
          {quantity}x eBook
        </p>
      </div>
      <div class="lg:w-full max-w-[175px] lg:flex lg:flex-col lg:items-center">
        <div class="bg-[#F2970E] rounded-[5px] w-full h-[23px] flex items-center justify-center mb-2">
          <p class="text-white text-[10px] font-semibold leading-normal tracking-[0.5px]">
            GANHE {quantity} NÚMERO DA SORTE
          </p>
        </div>
        <button class="bg-[#6DC04B] rounded-lg w-full max-w-[157px] h-[35px] flex justify-center items-center text-white text-sm font-semibold border-none">
          COMPRAR AGORA
        </button>
      </div>
    </div>
  );
};

export default PromoQuantitySelector;
