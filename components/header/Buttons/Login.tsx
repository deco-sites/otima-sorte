import { useUI } from "$store/sdk/useUI.ts";
import { useState } from "preact/hooks";

export default function LoginButton() {
  const [showModal, setShowModal] = useState(false);

  const { displayLogin } = useUI();

  return (
    <>
      <button
        onClick={() => {
          displayLogin.value = true;
        }}
        class="lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
        >
          <path
            d="M19.9997 21.2813V19.084C19.9997 17.9185 19.5367 16.8007 18.7126 15.9766C17.8884 15.1525 16.7707 14.6895 15.6051 14.6895H6.81597C5.65046 14.6895 4.53268 15.1525 3.70853 15.9766C2.88439 16.8007 2.42139 17.9185 2.42139 19.084V21.2813"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.21 10.295C13.6371 10.295 15.6046 8.32751 15.6046 5.90044C15.6046 3.47338 13.6371 1.50586 11.21 1.50586C8.78295 1.50586 6.81543 3.47338 6.81543 5.90044C6.81543 8.32751 8.78295 10.295 11.21 10.295Z"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="hidden lg:flex items-center gap-[6px]">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="32"
            viewBox="0 0 29 32"
            fill="none"
          >
            <path
              d="M27.4969 30.2157V27.0352C27.4969 25.3481 26.8267 23.7301 25.6338 22.5372C24.4409 21.3443 22.8229 20.6741 21.1358 20.6741H8.4136C6.72653 20.6741 5.10856 21.3443 3.91562 22.5372C2.72268 23.7301 2.05249 25.3481 2.05249 27.0352V30.2157"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.7744 14.313C18.2876 14.313 21.1356 11.4651 21.1356 7.95193C21.1356 4.43879 18.2876 1.59082 14.7744 1.59082C11.2613 1.59082 8.41333 4.43879 8.41333 7.95193C8.41333 11.4651 11.2613 14.313 14.7744 14.313Z"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          <p class="text-white text-[11px] leading-normal mb-[2px]">
            Seja bem-vindo(a)!
          </p>
          <div
            class="relative"
            onMouseEnter={() => {
              setShowModal(true);
            }}
            onMouseLeave={() => {
              setShowModal(false);
            }}
          >
            <p class="text-white text-xs font-bold leading-normal underline cursor-pointer">
              ACESSE AQUI
            </p>
            <div
              class={`absolute w-screen max-w-[278px] left-[-107px] rounded-lg pt-[20px] shadow ${
                showModal ? "block" : "hidden"
              }`}
            >
              <div class="bg-white w-[48px] h-[48px] rotate-45 absolute left-0 right-0 mx-auto top-[7px] rounded-lg" />
              <div class="bg-white pt-[43px] px-[31px] pb-[31px] rounded-lg">
                <div class="flex flex-col gap-[23px]">
                  <p
                    class="text-[#2E385F] text-[15px] font-semibold leading-normal hover:underline cursor-pointer"
                    onClick={() => {
                      displayLogin.value = true;
                    }}
                  >
                    Fazer login ou Cadastrar-se
                  </p>
                  <a
                    href="/my-account"
                    class="text-[#2E385F] text-[15px] font-semibold leading-normal hover:underline"
                  >
                    Meus pedidos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
