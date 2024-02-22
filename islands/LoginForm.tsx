import { useCallback, useState } from "preact/hooks";
import { invoke } from "../runtime.ts";
import { useUI } from "$store/sdk/useUI.ts";

const LoginForm = () => {
  const [step, setStep] = useState("login");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { displayLogin } = useUI();

  const doLogin = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      setIsLoading(true);
      setHasError(false);
      const token = await invoke[
        "deco-sites/otima-sorte"
      ].actions.user.loginShopify({
        email,
        password,
      });

      setIsLoading(false);
      /* TODO: ERROR HANDLE*/
      if (token) {
        /* location.href = "/my-account"; */
      } else {
        setHasError(true);
      }
    },
    [],
  );

  const createCustomer = useCallback(
    async ({
      firstName,
      lastName,
      email,
      password,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }) => {
      setIsLoading(true);
      setHasError(false);

      const data = await invoke[
        "deco-sites/otima-sorte"
      ].actions.user.createShopify({
        firstName,
        lastName,
        email,
        password,
      });

      setIsLoading(false);

      /* TODO: ERROR HANDLE*/
      if (data?.customerCreate) {
        console.log(data?.customerCreate);
      } else {
        setHasError(true);
      }
    },
    [],
  );

  const title = (step: string) => {
    switch (step) {
      case "login":
        return "Login";
      case "create":
        return "Crie sua conta";
      case "recover":
        return "Recuperar senha";
      default:
        return "Login";
    }
  };

  return (
    <div class="pt-[14px] px-7">
      <div class="flex justify-between mb-[37px]">
        <h1 class="text-[#2E385F] text-[17px] font-extrabold leading-normal uppercase">
          {title(step)}
        </h1>
        <div
          onClick={() => (displayLogin.value = false)}
          class="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
          >
            <path
              d="M24.0186 5.75L6.51855 23.25"
              stroke="#9DA6BA"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.51855 5.75L24.0186 23.25"
              stroke="#9DA6BA"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {step === "login" && (
        <div>
          <form
            class="flex flex-col gap-[15px] mb-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (!e.target) {
                return;
              }
              // deno-lint-ignore no-explicit-any
              const email = (e.target as any).email.value;
              // deno-lint-ignore no-explicit-any
              const password = (e.target as any).password.value;
              doLogin({ email, password });
            }}
          >
            <div class="w-full flex flex-col gap-2">
              <label
                htmlFor="login_email"
                class="text-[#444] text-base font-bold leading-normal"
              >
                Email
              </label>
              <input
                id="login_email"
                name="email"
                class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
                placeholder="Digite seu email aqui"
              />
            </div>
            <div class="w-full flex flex-col gap-2">
              <label
                htmlFor="login_password"
                class="text-[#444] text-base font-bold leading-normal"
              >
                Senha
              </label>
              <input
                id="login_password"
                name="password"
                type="password"
                class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
                placeholder="Digite sua senha aqui"
              />
            </div>
            <button
              class="rounded-lg bg-[#2E385F] text-white text-[15px] font-bold leading-normal h-[45px] flex items-center justify-center disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Carregando..." : "Login"}
            </button>
          </form>
          <div class="flex flex-col items-center gap-4">
            <p
              class="text-[#444] text-center w-fit text-sm font-bold leading-normal underline cursor-pointer"
              onClick={() => setStep("recover")}
            >
              Esqueceu a sua senha?
            </p>
            <p
              class="text-[#444] text-center w-fit text-sm font-bold leading-normal underline cursor-pointer"
              onClick={() => setStep("create")}
            >
              Criar conta
            </p>
          </div>
        </div>
      )}
      {step === "create" && (
        <div>
          <form
            class="flex flex-col gap-[15px] mb-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (!e.target) {
                return;
              }
              // deno-lint-ignore no-explicit-any
              const firstName = (e.target as any).firstname.value;
              // deno-lint-ignore no-explicit-any
              const lastName = (e.target as any).lastname.value;
              // deno-lint-ignore no-explicit-any
              const email = (e.target as any).email.value;
              // deno-lint-ignore no-explicit-any
              const password = (e.target as any).password.value;
              createCustomer({ firstName, lastName, email, password });
            }}
          >
            <div class="w-full flex flex-col gap-2">
              <label
                htmlFor="create_firstname"
                class="text-[#444] text-base font-bold leading-normal"
              >
                Primeiro nome
              </label>
              <input
                id="create_firstname"
                name="firstname"
                class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
                placeholder="Digite seu primeiro nome aqui"
              />
            </div>
            <div class="w-full flex flex-col gap-2">
              <label
                htmlFor="create_lastname"
                class="text-[#444] text-base font-bold leading-normal"
              >
                Último nome
              </label>
              <input
                id="create_lastname"
                name="lastname"
                class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
                placeholder="Digite seu último nome aqui"
              />
            </div>
            <div class="w-full flex flex-col gap-2">
              <label
                htmlFor="create_email"
                class="text-[#444] text-base font-bold leading-normal"
              >
                Email
              </label>
              <input
                id="create_email"
                name="email"
                class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
                placeholder="Digite seu email aqui"
              />
            </div>
            <div class="w-full flex flex-col gap-2">
              <label
                htmlFor="create_password"
                class="text-[#444] text-base font-bold leading-normal"
              >
                Senha
              </label>
              <input
                id="create_password"
                name="password"
                type="password"
                class="rounded-[5px] border border-[#E7E7E7] bg-[#F6F6F6] h-[45px] px-[19px]"
                placeholder="Crie sua senha"
              />
            </div>
            <button
              class="rounded-lg bg-[#2E385F] text-white text-[15px] font-bold leading-normal h-[45px] flex items-center justify-center disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Carregando..." : "CRIAR CONTA"}
            </button>
          </form>
          <div class="flex flex-col items-center gap-4">
            <p
              class="text-[#444] text-center w-fit text-sm font-bold leading-normal underline cursor-pointer"
              onClick={() => setStep("login")}
            >
              Login
            </p>
          </div>
        </div>
      )}
      {hasError && (
        <div class="w-full text-red-700 text-sm text-center mt-5">
          Algo de errado aconteceu, tente novamente.
        </div>
      )}
    </div>
  );
};

export default LoginForm;
