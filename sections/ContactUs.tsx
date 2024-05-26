import type { ImageWidget } from "apps/admin/widgets.ts";

export interface ContactUs {
  banner?: ImageWidget;
  text?: string;
  phones?: string[];
  email?: string;
  facebook?: string;
  instagram?: string;
}

const DEFAULT_PROPS = {
  banner: "https://fakeimg.pl/1270x170/00ff40/ffffff",
  text: "Placeholder",
  phones: ["telefone 1", "telefone 2"],
  email: "email",
  facebook: "/",
  instagram: "/",
};

const ContactUs = (props: ContactUs) => {
  const { banner, text, phones, email } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="px-[15px] mb-[85px] lg:mb-[190px]">
      <div class="max-w-[1270px] mx-auto">
        <div class="w-full h-[170px] relative mb-[18px] lg:mb-[30px]">
          <img
            src={banner}
            alt=""
            class="absolute object-cover w-full h-full"
          />
        </div>
        <p class="text-[13px] leading-[20px] text-center lg:text-left lg:leading-[22px] text-[#444444] mb-[21px] lg:mb-[29px]">
          {text}
        </p>
        <div class="flex flex-col gap-[36px] lg:flex-row lg:justify-between lg:gap-[15px]">
          <div class="w-full max-w-[400px]">
            <div class="flex justify-between mb-[27px] lg:mb-[25px]">
              <div class="w-full">
                <p class="text-sm font-medium text-[#2E385F] leading-[34px]">
                  TELEFONE:
                </p>
                <div>
                  {phones.map((phone) => (
                    <p class="text-[#444444] text-[13px] leading-[25px]">
                      {phone}
                    </p>
                  ))}
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm font-medium text-[#2E385F] leading-[34px]">
                  E-MAIL
                </p>
                <div>
                  <p class="text-[#444444] text-[13px] leading-[25px]">
                    {email}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex gap-[35px]">
              <a href={props.facebook}>
                <svg
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3785 0.325256L9.6661 0.320312C6.06598 0.320312 3.74039 2.9454 3.74039 7.0128V10.0964H0.015625V15.6766H3.74039L3.7359 27.5105H8.94742L8.95191 15.6766H13.2258L13.2224 10.0976H8.95191V7.48121C8.95191 6.22305 9.22254 5.58655 10.7104 5.58655L13.3673 5.58531L13.3785 0.325256Z"
                    fill="#6DC04B"
                  />
                </svg>
              </a>
              <a href={props.instagram}>
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.87042 0.484171C6.65732 0.582236 4.73912 1.11361 3.19021 2.62832C1.6359 4.15099 1.10154 6.04225 1.00144 8.19307C0.939209 9.5355 0.575338 19.6773 1.63049 22.337C2.34204 24.1313 3.74346 25.511 5.58726 26.212C6.44761 26.5406 7.42974 26.7631 8.87042 26.8281C20.9167 27.3634 25.3821 27.072 27.2652 22.337C27.5993 21.4942 27.8293 20.5305 27.8928 19.1192C28.4434 7.25855 27.8036 4.68769 25.7041 2.62832C24.0389 0.996987 22.0801 -0.113496 8.87042 0.484171ZM8.98132 24.4427C7.66239 24.3844 6.94679 24.1686 6.46927 23.987C5.26802 23.5285 4.36574 22.646 3.90174 21.4732C3.0982 19.4523 3.36471 9.85378 3.4364 8.30063C3.50675 6.77929 3.82058 5.38889 4.91361 4.31547C6.26636 2.99026 8.0141 2.34078 19.9143 2.86822C21.4673 2.93713 22.8863 3.24471 23.982 4.31547C25.3348 5.64068 26.0058 7.37029 25.4592 19.0122C25.3997 20.3043 25.1792 21.0054 24.9939 21.4732C23.7697 24.5543 20.9532 24.982 8.98132 24.4427ZM20.0455 6.58153C20.0455 7.45883 20.772 8.1722 21.6688 8.1722C22.5657 8.1722 23.2935 7.45883 23.2935 6.58153C23.2935 5.70425 22.5657 4.99151 21.6688 4.99151C20.772 4.99151 20.0455 5.70425 20.0455 6.58153ZM7.50142 13.6555C7.50142 17.4137 10.6114 20.4608 14.4478 20.4608C18.2842 20.4608 21.3942 17.4137 21.3942 13.6555C21.3942 9.89717 18.2842 6.85208 14.4478 6.85208C10.6114 6.85208 7.50142 9.89717 7.50142 13.6555ZM9.93909 13.6555C9.93909 11.2171 11.9574 9.23874 14.4478 9.23874C16.9382 9.23874 18.9566 11.2171 18.9566 13.6555C18.9566 16.0952 16.9382 18.0741 14.4478 18.0741C11.9574 18.0741 9.93909 16.0952 9.93909 13.6555Z"
                    fill="#6DC04B"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="w-full max-w-[730px]">
            <form action="#" method="POST" class="flex flex-col gap-[11px]">
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite aqui seu nome completo"
                required
                class="border border-[#D9D9D9] rounded-[5px] h-[45px] px-[22px] text-[13px] leading-[15px] font-medium text-[#444444]"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite aqui seu e-mail"
                required
                class="border border-[#D9D9D9] rounded-[5px] h-[45px] px-[22px] text-[13px] leading-[15px] font-medium text-[#444444]"
              />
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Digite aqui seu Telefone / Celular"
                required
                class="border border-[#D9D9D9] rounded-[5px] h-[45px] px-[22px] text-[13px] leading-[15px] font-medium text-[#444444]"
              />
              <select
                id="assunto"
                name="assunto"
                required
                class="border border-[#D9D9D9] rounded-[5px] h-[45px] px-[22px] text-[13px] leading-[15px] font-medium text-[#444444]"
              >
                <option value="" disabled selected>
                  Selecione um assunto
                </option>
                <option value="Tenho um problema com meu pedido">
                  Tenho um problema com meu pedido
                </option>
                <option value="Tenho uma dúvida">Tenho uma dúvida</option>
                <option value="Não recebi meu número da sorte">
                  Não recebi meu número da sorte
                </option>
                <option value="Não recebi meu e-book">
                  Não recebi meu e-book
                </option>
                <option value="Tenho uma sugestão">Tenho uma sugestão</option>
                <option value="Tenho uma reclamação">
                  Tenho uma reclamação
                </option>
              </select>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Escreva aqui sua mensagem"
                required
                class="border border-[#D9D9D9] rounded-[5px] min-h-[185px] px-[22px] py-[17px] text-[13px] leading-[15px] font-medium text-[#444444]"
              ></textarea>
              <input
                type="submit"
                value="Enviar"
                class="w-full max-w-[237px] h-[45px] flex items-start justify-center bg-[#2E385F] text-white text-sm leading-4 font-medium rounded-[6px] mx-auto"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
