import { useCallback } from "preact/hooks";
import { invoke } from "../runtime.ts";

const NewsletterShopifyForm = ({ customerId }) => {
  const subscribeNewsletter = useCallback(
    async ({ customerId }: { customerId: string }) => {
      console.log("subscribeNewsletter customerId", customerId);

      const data = await invoke[
        "deco-sites/otima-sorte"
      ].actions.user.subscribeNewsletter({
        customerId,
      });

      console.log("data", data);
    },
    []
  );

  return (
    <div class="bg-[#1E274A] py-[22px] px-[34px] lg:pt-[63px] lg:pb-[75px]">
      <div class="max-w-[1270px] mx-auto lg:flex lg:justify-between lg:items-center">
        <p class="text-white text-center text-xl font-bold leading-normal mb-[17px] lg:mb-0 lg:max-w-[367px] lg:text-start lg:text-[26px]">
          Cadastre-se em nossa newsletter e receba todas as novidades!
        </p>
        <div class="lg:w-full max-w-[776px]">
          <form
            class="flex flex-col gap-[15px] mb-3 lg:mb-[15px] lg:flex-row lg:gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (!e.target) {
                return;
              }
              // deno-lint-ignore no-explicit-any
              const email = (e.target as any).email.value;
              // deno-lint-ignore no-explicit-any
              const name = (e.target as any).name.value;
              console.log("onSubmit customerId", customerId);
              if (customerId) {
                subscribeNewsletter({ customerId });
              } else {
                window.alert(
                  "Faça login para se registrar na nossa newsletter"
                );
              }
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              class="bg-white rounded-lg w-full h-[45px] text-[#676767] text-[13px] leading-normal text-center lg:text-left px-[22px]"
            />
            <input
              type="text"
              name="email"
              placeholder="Seu melhor e-mail"
              class="bg-white rounded-lg w-full h-[45px] text-[#676767] text-[13px] leading-normal text-center lg:text-left px-[22px]"
            />
            <button
              class="w-full h-[45px] border-2 border-white rounded-lg flex items-center justify-center text-white text-base font-semibold leading-normal lg:max-w-[190px]"
              type="submit"
            >
              CADASTRAR
            </button>
          </form>
          <p class="text-white text-xs leading-[18px]">
            *Ao concluir você aceitará nossos{" "}
            <a href="/" class="underline">
              termos de uso
            </a>{" "}
            e{" "}
            <a href="/" class="underline">
              política de privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterShopifyForm;
