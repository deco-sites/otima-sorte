import type { ImageWidget } from "apps/admin/widgets.ts";
import { useEffect, useState } from "preact/hooks";

interface Card {
  image: ImageWidget;
  name: string;
  prize: string;
  city: string;
}

export interface Props {
  title?: string;
  cards?: Card[];
}

const DEFAULT_PROPS = {
  title: "Últimos ganhadores",
  cards: [
    {
      image: "https://fakeimg.pl/300x300",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Cidade - UF",
    },
    {
      image: "https://fakeimg.pl/300x300",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Cidade - UF",
    },
    {
      image: "https://fakeimg.pl/300x300",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Cidade - UF",
    },
    {
      image: "https://fakeimg.pl/300x300",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Cidade - UF",
    },
    {
      image: "https://fakeimg.pl/300x300",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Cidade - UF",
    },
    {
      image: "https://fakeimg.pl/300x300",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Cidade - UF",
    },
    {
      image: "https://fakeimg.pl/300x300",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Cidade - UF",
    },
    {
      image: "https://fakeimg.pl/300x300",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Cidade - UF",
    },
    {
      image: "https://fakeimg.pl/300x300",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Cidade - UF",
    },
    {
      image: "https://fakeimg.pl/300x300",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Cidade - UF",
    },
  ],
};

const WinnersSection = (props: Props) => {
  const { title, cards } = { ...DEFAULT_PROPS, ...props };

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
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
            #winners-section swiper-container::part(bullet) {
              width: 13px;
              height: 13px;
              background: #FFFFFF;
              opacity: 0.5;
            }
            #winners-section swiper-container::part(bullet-active) {
              width: 13px;
              height: 13px;
              background: #FFFFFF;
            }                                     
          `,
        }}
      />
      <div
        class="bg-[#2E385F] px-[15px] pt-[30px] pb-12 lg:pt-[64px] lg:pb-[50px] mb-[18px] lg:mb-[27px]"
        id="winners-section"
      >
        <h1 class="text-white text-center text-xl font-extrabold leading-normal lg:text-[27px] mb-[30px] lg:mb-[36px]">
          {title}
        </h1>
        <div class="max-w-[1313px] mx-auto">
          {/* @ts-ignore */}
          <swiper-container
            slides-per-view={`${slidesNumber}`}
            slides-per-group={`${slidesNumber}`}
            loop="true"
            navigation="true"
            pagination="true"
            space-between="21"
          >
            {cards?.map((card, index) => (
              /* @ts-ignore */
              <swiper-slide key={index}>
                <Card
                  image={card.image}
                  name={card.name}
                  prize={card.prize}
                  city={card.city}
                />
                {/* @ts-ignore */}
              </swiper-slide>
            ))}
            {/* @ts-ignore */}
          </swiper-container>
        </div>
        <a
          href="/"
          class="flex items-center justify-center border font-medium border-[#FFF] rounded-lg w-full max-w-[310px] h-[35px] text-white text-sm font-medium leading-normal mx-auto"
        >
          CONFIRA TODOS OS GANHADORES
        </a>
      </div>
    </>
  );
};

const Card = (props: Card) => {
  const { image, name, prize, city } = props;

  return (
    <div class="max-w-[300px] mx-auto">
      <img src={image} alt="" />
      <div class="bg-[#39446C] py-[10px] lg:py-[18px] px-[5px] max-w-[300px]">
        <p class="text-white text-center leading-normal text-sm lg:text-base mb-[10px]">
          {name}
        </p>
        <p class="text-white text-center leading-normal text-[15px] lg:text-lg font-bold mb-[10px]">
          {prize}
        </p>
        <p class="text-white text-center leading-normal text-xs lg:text-sm">
          {city}
        </p>
      </div>
    </div>
  );
};

export default WinnersSection;
