import type { ImageWidget } from "apps/admin/widgets.ts";

interface Card {
  image: ImageWidget;
  title: string;
  description: string;
}

export interface Props {
  cards?: Card[];
}

const DEFAULT_PROPS = {
  cards: [
    {
      image: "https://fakeimg.pl/51x51/ccffda/ccffda",
      title: "produto digital",
      description:
        "Receba seu produto imediatamente após a confirmação do pagamento",
    },
    {
      image: "https://fakeimg.pl/51x51/ccffda/ccffda",
      title: "Pagamento",
      description: "Parcele sua compra em até 3 vezes sem juros",
    },
    {
      image: "https://fakeimg.pl/51x51/ccffda/ccffda",
      title: "pagamento via pix",
      description: "Ganhe mais 3% OFF finalizando o pedido com PIX",
    },
  ],
};

const InfoCards = (props: Props) => {
  const { cards } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="px-[15px]">
      <div class="flex flex-col gap-[14px] lg:flex-row lg:justify-between max-w-[1270px] mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            class="border border-[#2E385F] rounded-lg py-7 px-5 flex items-center justify-between w-full max-w-[410px] mx-auto gap-[30px]"
          >
            <img src={card.image} alt="" />
            <div>
              <p class="text-[#555] text-sm font-extrabold leading-normal uppercase mb-[3px]">
                {card.title}
              </p>
              <p class="text-[#616161] text-xs font-medium leading-[14px]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
