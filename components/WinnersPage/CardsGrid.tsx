import type { ImageWidget } from "apps/admin/widgets.ts";

interface Image {
  image: ImageWidget;
  alt: string;
}

interface Card {
  images: Image[];
  videoLink: string;
  name: string;
  prize: string;
  city: string;
  text: string;
}

interface Props {
  cards?: Card[];
}

const DEFAULT_PROPS = {
  cards: [
    {
      images: [
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
      ],
      videoLink: "/",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Estado - UF",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
    {
      images: [
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
      ],
      videoLink: "/",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Estado - UF",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
    {
      images: [
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
      ],
      videoLink: "/",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Estado - UF",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
    {
      images: [
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
      ],
      videoLink: "/",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Estado - UF",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
    {
      images: [
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
      ],
      videoLink: "/",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Estado - UF",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
    {
      images: [
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
      ],
      videoLink: "/",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Estado - UF",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
    {
      images: [
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
      ],
      videoLink: "/",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Estado - UF",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
    {
      images: [
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
      ],
      videoLink: "/",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Estado - UF",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
    {
      images: [
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
        {
          image: "https://fakeimg.pl/286x286",
          alt: "",
        },
      ],
      videoLink: "/",
      name: "Nome exemplo",
      prize: "iPhone 14 PRO MAX",
      city: "Estado - UF",
      text:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
  ],
};

const CardsGrid = (props: Props) => {
  const { cards } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const cardsArray = [];

  for (let i = 0; i < cards.length; i += 2) {
    if (i === cards.length - 1) {
      cardsArray.push(<Card card={cards[i]} />);
    } else {
      cardsArray.push(
        <div class="flex flex-col lg:flex-row gap-[22px]">
          <Card card={cards[i]} />
          <Card card={cards[i + 1]} />
        </div>,
      );
    }
  }

  return (
    <div class="px-[15px]">
      <div class="max-w-[1270px] mx-auto flex flex-col gap-[22px]">
        <p class="text-[#444] text-center text-[13px] font-medium leading-5 mb-[34px] lg:mb-[45px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
        {cardsArray}
      </div>
    </div>
  );
};

const Card = ({ card }: { card: Card }) => {
  return (
    <div class="bg-[#39446C] py-[32px] px-[35px] rounded-2xl lg:flex gap-[37px] max-w-[624px]">
      <div class="flex flex-col items-center">
        <img
          src={card.images[0].image}
          alt={card.images[0].alt}
          class="mb-[18px] lg:mb-[22px]"
        />
        <a
          href={card.videoLink}
          class="bg-white w-full max-w-[255px] h-[35px] text-[#2E385F] text-sm font-medium leading-normal flex items-center justify-center gap-[9px] rounded-lg mb-[17px] lg:mb-0"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.8652 22.4229C18.3881 22.4229 22.8652 17.9457 22.8652 12.4229C22.8652 6.9 18.3881 2.42285 12.8652 2.42285C7.34239 2.42285 2.86523 6.9 2.86523 12.4229C2.86523 17.9457 7.34239 22.4229 12.8652 22.4229Z"
                stroke="#2E385F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8652 8.42285L16.8652 12.4229L10.8652 16.4229V8.42285Z"
                stroke="#2E385F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          CLIQUE PARA VER O VÍDEO
        </a>
      </div>
      <div class="flex flex-col items-center lg:max-w-[256px]">
        <p class="text-white text-base leading-normal mb-3">{card.name}</p>
        <p class="text-white text-lg font-bold leading-normal mb-3">
          {card.prize}
        </p>
        <p class="text-white text-sm leading-normal mb-4">{card.city}</p>
        <p class="text-white text-[13px] leading-5">{card.text}</p>
      </div>
    </div>
  );
};

export default CardsGrid;
