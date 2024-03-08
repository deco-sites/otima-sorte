import { useState } from "preact/hooks";
import MenuMobileAccordeon from "$store/islands/MenuMobileAccordeon.tsx";

export interface Link {
  text: string;
  url: string;
}

export interface Subcategory {
  name: string;
  url: string;
}

export interface Category {
  name: string;
  url: string;
  displayShowAll?: boolean;
  subcategories?: Subcategory[];
}

interface MenuItem {
  name: string;
  url: string;
  categories?: Category[];
}

export interface Props {
  menuItems?: MenuItem[];
  links?: Link[];
}

const DEFAULT_PROPS = {
  menuItems: [
    {
      name: "NOSSOS PRODUTOS",
      url: "/",
      categories: [
        {
          name: "Ebooks",
          url: "/",
          displayShowAll: true,
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
          ],
        },
      ],
    },
    {
      name: "LANÇAMENTOS",
      url: "/lancamentos",
    },
    {
      name: "PROMOÇÕES",
      url: "/promocoes",
    },
  ],
  links: [
    {
      text: "sobre nós",
      url: "/",
    },
    {
      text: "depoimentos",
      url: "/",
    },
    {
      text: "perguntas frequentes",
      url: "/",
    },
  ],
};

const MenuMobileButton = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { menuItems, links } = {
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
        menuItems={menuItems}
        links={links}
      />
    </>
  );
};

interface MenuMobileDrawerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  menuItems?: MenuItem[];
  links?: Link[];
}

const MenuMobileDrawer = ({
  isOpen,
  setIsOpen,
  menuItems,
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
        <div class="bg-white flex-1 overflow-y-scroll">
          {menuItems?.map((item, index) => {
            return item.categories?.length ? (
              <MenuMobileAccordeon categories={item.categories} key={index} />
            ) : (
              <div
                key={index}
                class="bg-[#2E385F] py-5 px-[30px] border-b border-b-white"
              >
                <a
                  href={item.url}
                  class="text-white text-[15px] font-medium leading-normal"
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
        <div class="bg-[#1E274A] py-[50px] pl-[30px] flex flex-col gap-5">
          {links?.map((link, index) => (
            <a
              href={link.url}
              class="text-white text-xs leading-normal uppercase"
              key={index}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuMobileButton;
