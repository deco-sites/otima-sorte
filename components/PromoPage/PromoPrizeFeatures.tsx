interface Feature {
  title: string;
  text: string;
}

export interface Props {
  features?: Feature[];
}

const DEFAULT_PROPS = {
  features: [
    {
      title: "Marca",
      text: "Apple",
    },
    {
      title: "Modelo",
      text: "iPhone 15 PRO MAX",
    },
    {
      title: "Ano",
      text: "2023",
    },
    {
      title: "Cor",
      text: "4 opções (Titânio, dourado, azul meia-noite e branco) ",
    },
    {
      title: "Capacidade",
      text: "512GB",
    },
    {
      title: "Condição",
      text: "Novo - lacrado",
    },
  ],
};

const PromoPrizeFeatures = (props: Props) => {
  const { features } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const featuresArray = [];

  for (let i = 0; i < features.length; i += 2) {
    if (i === features.length - 1) {
      featuresArray.push(
        <div key={i}>
          <div>
            <h1 class="text-[#686868] text-xs font-bold leading-[18px] uppercase mb-[13px]">
              {features[i].title}
            </h1>
            <p class="text-[#686868] text-base leading-[18px]">
              {features[i].text}
            </p>
          </div>
        </div>,
      );
    } else {
      featuresArray.push(
        <div key={i} class="flex lg:flex-col lg:gap-[33px]">
          <div class="w-full">
            <h1 class="text-[#686868] text-xs font-bold leading-[18px] uppercase mb-[13px]">
              {features[i].title}
            </h1>
            <p class="text-[#686868] text-base leading-[18px]">
              {features[i].text}
            </p>
          </div>
          <div class="w-full">
            <h1 class="text-[#686868] text-xs font-bold leading-[18px] uppercase mb-[13px]">
              {features[i + 1].title}
            </h1>
            <p class="text-[#686868] text-base leading-[18px]">
              {features[i + 1].text}
            </p>
          </div>
        </div>,
      );
    }
  }

  return (
    <div class="px-[15px mb-[54px] lg:mb-[127px]">
      <p class="text-[#2E385F] text-center text-[22px] font-semibold leading-normal mb-[25px]">
        Características
      </p>
      <div class="flex flex-col gap-[26px] px-[15px] lg:flex-row lg:justify-between max-w-[1270px] mx-auto">
        {featuresArray}
      </div>
    </div>
  );
};

export default PromoPrizeFeatures;
