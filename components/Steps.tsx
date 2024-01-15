/**
 * @titleBy alt
 */
export interface Step {
  /** @description step number */
  number: string;
  /** @description step title */
  title: string;
  /** @description step description */
  description: string;
}

export interface Props {
  /** @description steps */
  steps?: Step[];
}

const DEFAULT_PROPS = {
  steps: [
    {
      number: "1",
      title: "Compre",
      description: "Compre um eBook das categorias participantes.",
    },
    {
      number: "2",
      title: "Números da sorte",
      description:
        "Receba seus números da sorte baseados nos da loteria federal direto no seu e-mail.",
    },
    {
      number: "3",
      title: "Prêmios",
      description:
        "Concorra aos melhores prêmios, basta aguardar a data do sorteio.",
    },
  ],
};

const Steps = (props: Props) => {
  const { steps } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="px-[15px]">
      <div class="bg-[#F2970E] rounded-2xl px-[18px] md:px-11 py-[30px] md:py-14 flex flex-col gap-5 md:flex-row md:justify-between md:gap-8 max-w-[1270px] mx-auto">
        {steps.map((step, index) => (
          <div key={index} class="flex gap-6 max-w-[355px]">
            <div class="bg-[#2E385F] rounded-full text-white text-[30px] font-semibold leading-normal flex items-center justify-center min-w-[64px] h-[64px]">
              {step.number}
            </div>
            <div>
              <p class="text-white text-lg font-bold leading-normal uppercase mb-[7px] md:text-xl">
                {step.title}
              </p>
              <p class="text-white text-sm leading-normal md:text-base">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
