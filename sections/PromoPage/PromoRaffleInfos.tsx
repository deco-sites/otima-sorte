export interface Props {
  authorizationNumber?: string;
  authorizationLink?: string;
  raffleDate?: string;
}

const DEFAULT_PROPS = {
  authorizationNumber: "Autorização SRE/ME nº 00.000000/2023",
  authorizationLink: "/raffle",
  raffleDate: "26/01/2024",
};

const PromoRaffleInfos = (props: Props) => {
  const { authorizationNumber, authorizationLink, raffleDate } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="px-[15px] mb-10 lg:mb-20">
      <div class="max-w-[1270px] mx-auto flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-5">
        <div class="px-[23px] pt-10 pb-[45px] shadow-raffle flex flex-col items-center rounded-2xl lg:flex-grow">
          <div class="mb-[17px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <path
                d="M21.9995 43.0945C33.7342 43.0945 43.2471 33.5816 43.2471 21.8469C43.2471 10.1122 33.7342 0.599365 21.9995 0.599365C10.2648 0.599365 0.751953 10.1122 0.751953 21.8469C0.751953 33.5816 10.2648 43.0945 21.9995 43.0945Z"
                fill="#5E8E3E"
              />
              <path
                d="M30.8292 15.4377L18.364 27.903L12.698 22.237"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="text-[#686868] text-center text-sm font-semibold leading-[22px] mb-[6px]">
            {authorizationNumber}
          </p>
          <a
            href={authorizationLink}
            class="text-[#2E385F] text-center text-sm font-semibold leading-[22px] underline"
          >
            Clique aqui
          </a>
        </div>
        <div class="bg-[#6DC04B] shadow-raffle px-[33px] py-[63px] rounded-2xl lg:max-w-[411px]">
          <p class="text-white text-center text-xl font-semibold leading-[32px]">
            Sorteio dia {raffleDate} pela Loteria Federal.
          </p>
        </div>
        <div class="text-white text-center text-xl leading-[32px] bg-[#1E274A] rounded-2xl shadow-raffle px-5 py-[48px] lg:max-w-[302px]">
          <p class="font-semibold">Ficou com dúvidas?</p>
          <p>
            <a href="/" class="font-semibold underline">
              Clique aqui
            </a>{" "}
            e veja nossas perguntas e respostas
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoRaffleInfos;
