import type { ImageWidget } from "apps/admin/widgets.ts";

interface Image {
  image: ImageWidget;
  alt: string;
}

export interface Props {
  promoName?: string;
  prizeImage?: Image;
  productImage?: Image;
  productName?: string;
  prizeName?: string;
  productLink?: string;
  description?: string;
  background?: ImageWidget;
}

const DEFAULT_PROPS = {
  promoName: "iPhone na mão",
  prizeImage: {
    image: "https://fakeimg.pl/653x508",
    alt: "",
  },
  productImage: {
    image: "https://fakeimg.pl/219x233",
    alt: "",
  },
  productName: "Produto para teste de layout para exemplo*",
  prizeName: "iPhone 15 PRO MAX - 512GB",
  productLink: "/",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  background: "https://fakeimg.pl/1920x615/000000/000000",
};

const PromoInfos = (props: Props) => {
  const {
    promoName,
    prizeImage,
    productImage,
    productName,
    prizeName,
    productLink,
    description,
    background,
  } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div
      class="py-[27px] pb-[29px] lg:pb-0 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div class="max-w-[1270px] mx-auto">
        <h1 class="text-white text-[26px] leading-[22px] text-center mb-[32px] lg:text-left">
          <span class="text-[#F2970E] font-semibold">PROMO :</span> {promoName}
        </h1>
        <div class="lg:flex lg:justify-between">
          <div class="px-[27px] mb-10 lg:px-0 lg:mb-0">
            <img src={prizeImage.image} alt={prizeImage.alt} />
          </div>
          <div class="lg:max-w-[544px] flex flex-col pb-[25px]">
            <div class="flex items-start gap-[11px] mb-[31px] px-[10px] lg:px-0 lg:justify-between">
              <img
                src={productImage.image}
                alt={productImage.alt}
                class="w-[33%] lg:w-full max-w-[219px]"
              />
              <div class="">
                <p class="text-white text-[17px] leading-[18px] mb-1">
                  Compre o eBook:
                </p>
                <p class="text-white text-sm font-bold leading-[18px] mb-[13px]">
                  {productName}
                </p>
                <div class="border border-[#F2970E] rounded-lg w-full max-w-[218px] h-[45px] flex items-center justify-center lg:max-w-none mb-[15px]">
                  <p class="text-[#F2970E] text-sm font-bold tracking-[0.7px] text-center">
                    E GANHE 1 NÚMERO DA SORTE*
                  </p>
                </div>
                <p class="text-white text-[17px] leading-[18px] mb-[11px]">
                  Para concorrer a um
                </p>
                <p class="text-[#F2970E] text-[18px] leading-5 font-semibold mb-2 lg:mb-[25px]">
                  {prizeName}
                </p>
                <a
                  href={productLink}
                  class="flex items-center justify-center w-full max-w-[218px] h-[45px] bg-[#6DC04B] rounded-lg text-white text-sm font-semibold leading-normal"
                >
                  COMPRAR AGORA
                </a>
              </div>
            </div>
            <p class="text-white text-center text-[13px] leading-5 mb-6 px-[15px] lg:px-0 lg:text-start">
              {description}
            </p>
            <p class="text-white text-center text-[10px] leading-normal px-[28px] lg:px-0 lg:text-start lg:mt-auto">
              *Na compra do eBook você ganha 1 número da sorte para concorrer a
              promoção: {promoName}. O número será enviado diretamente no
              e-mail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoInfos;
