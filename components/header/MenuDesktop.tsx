import type { ImageWidget } from "apps/admin/widgets.ts";
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

export interface Banner {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

export interface Props {
  categories?: Category[];
  links?: Link[];
  bannertop?: Banner;
  bannerbottom?: Banner;
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
  bannertop: {
    src: "https://fakeimg.pl/509x161/686868/ffffff?text=BANNER+PRODUTO+PROMOCIONAL",
    alt: "",
  },
  bannerbottom: {
    src: "https://fakeimg.pl/509x161/686868/ffffff?text=BANNER+PRODUTO+PROMOCIONAL",
    alt: "",
  },
};

const MenuDesktop = (props: Props) => {
  const { categories, links, bannertop, bannerbottom } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const [show, setShow] = useState(false);

  return (
    <>
      <div class="flex items-center gap-[35px]">
        {categories && (
          <div
            class="relative"
            onMouseEnter={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}
          >
            <div
              class={`flex items-center gap-[7px] border border-white rounded-lg h-10 px-2 w-fit ${
                show && "bg-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M3.65967 13.5908H21.6597"
                  stroke={`${show ? "#2E385F" : "white"}`}
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.65967 6.59082H21.6597"
                  stroke={`${show ? "#2E385F" : "white"}`}
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.65967 20.5908H21.6597"
                  stroke={`${show ? "#2E385F" : "white"}`}
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p
                class={`text-[15px] font-medium leading-normal uppercase ${
                  show ? "text-[#2E385F]" : "text-white"
                }`}
              >
                NOSSOS PRODUTOS
              </p>
            </div>
          </div>
        )}
        {links.map((link, index) => (
          <a key={index} href={link.url} class="text-white">
            {link.text}
          </a>
        ))}
      </div>
      <div
        class={`bg-white absolute left-0 w-screen z-50 pt-[35px] pb-[69px] px-[15px] ${
          show ? "flex" : "hidden"
        }`}
        style={{ top: "calc(100% - 44px)" }}
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        <div class="flex justify-between w-full max-w-[1196px] mx-auto">
          <div class="flex gap-7">
            {categories.map((category, index) => (
              <div key={index}>
                <a
                  href={category.url}
                  class="text-[#686868] text-base font-bold leading-normal mb-[10px] block"
                >
                  {category.name}
                </a>
                <div class="flex flex-col gap-[14px]">
                  {category.subcategories
                    ?.slice(0, 9)
                    .map((subcategory, index) => (
                      <a
                        key={index}
                        href={subcategory.url}
                        class="text-[#686868] text-sm leading-normal"
                      >
                        {subcategory.name}
                      </a>
                    ))}
                  {category.subcategories?.length &&
                    category.subcategories?.length > 9 && (
                      <a
                        href={category.url}
                        class="text-[#686868] text-sm leading-normal font-bold underline"
                      >
                        VER TODOS
                      </a>
                    )}
                </div>
              </div>
            ))}
          </div>
          <div class="flex flex-col justify-between">
            <img
              src={bannertop.src}
              alt={bannertop.alt}
              class="rounded-[15px]"
            />
            <img
              src={bannerbottom.src}
              alt={bannerbottom.alt}
              class="rounded-[15px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDesktop;
