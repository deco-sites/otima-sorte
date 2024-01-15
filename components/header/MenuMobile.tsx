import { useState } from "preact/hooks";

export interface Subcategory {
  name: string;
  url: string;
}

export interface Category {
  name: string;
  url: string;
  subcategories?: Subcategory[];
}

export interface Link {
  text: string;
  url: string;
}

export interface Props {
  categories?: Category[];
  links?: Link[];
}

const DEFAULT_PROPS = {
  categories: [
    {
      name: "Ebooks",
      url: "/",
      subcategories: [
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
        {
          name: "Subcategoria exemplo",
          url: "/",
        },
      ],
    },
  ],
  links: [
    {
      text: "LANÇAMENTOS",
      url: "/",
    },
    {
      text: "PROMOÇÕES",
      url: "/",
    },
    {
      text: "SOBRE NÓS",
      url: "/",
    },
  ],
};

const MenuMobileButton = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { categories, links } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M3.4082 15.0813H23.8567"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.4082 7.12915H23.8567"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.4082 23.0334H23.8567"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <MenuMobileDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categories={categories}
        links={links}
      />
    </>
  );
};

interface MenuMobileDrawerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  categories?: Category[];
  links?: Link[];
}

const MenuMobileDrawer = ({
  isOpen,
  setIsOpen,
  categories,
  links,
}: MenuMobileDrawerProps) => {
  return (
    <>
      <div
        class={`h-screen w-screen fixed top-0 left-0 z-[998] hidden ${
          isOpen && "!block"
        }`}
        style={{ background: "rgba(0, 0, 0, 0.65)" }}
      />
      <div
        class={`h-screen fixed top-0 left-0 z-[999] -translate-x-full transition-all flex flex-col ${
          isOpen && "translate-x-0"
        }`}
        style={{ width: "calc(100vw - 20px)" }}
      >
        <div class="flex justify-center relative bg-[#2E385F] py-[21px]">
          <div
            class="absolute top-[21px] left-[14px]"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M24.1348 5.75L6.63477 23.25"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.63477 5.75L24.1348 23.25"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <img src="https://fakeimg.pl/154x40" alt="" />
        </div>
        <div class="bg-white flex-1">
          <div>
            <div class="flex items-center justify-between bg-[#2E385F] px-[30px] border-b border-white">
              <p class="text-white text-[15px] font-medium leading-normal">
                NOSSOS PRODUTOS
              </p>
              <span class="text-white text-[26px] font-semibold leading-normal">
                +
              </span>
            </div>
            <div class="pt-5 pb-[50px] px-[56px] hidden">
              {categories?.map((category, index) => (
                <div key={index}>
                  <a
                    href={category.url}
                    class="text-[#686868] text-base font-bold leading-normal mb-5 block"
                  >
                    {category.name}
                  </a>
                  <div class="flex flex-col gap-[25px]">
                    {category.subcategories?.map((subcategory, index) => (
                      <a
                        href={subcategory.url}
                        key={index}
                        class="text-[#686868] text-[15px] leading-[25px]"
                      >
                        {subcategory.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="bg-[#2E385F] pb-[30px]">
            {links?.map((link, index) => (
              <div
                key={index}
                class="bg-[#2E385F] py-5 px-[30px] border-b border-b-white"
              >
                <a
                  href={link.url}
                  class="text-white text-[15px] font-medium leading-normal"
                >
                  {link.text}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div class="bg-[#1E274A] py-[50px] pl-[30px] flex flex-col gap-5">
          <a href="/" class="text-white text-xs leading-normal uppercase">
            sobre nós
          </a>
          <a href="/" class="text-white text-xs leading-normal uppercase">
            depoimentos
          </a>
          <a href="/" class="text-white text-xs leading-normal uppercase">
            perguntas frequentes
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuMobileButton;
