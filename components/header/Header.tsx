import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import RichText from "$store/sections/Content/RichText.tsx";
import type { SectionProps } from "deco/types.ts";

import MenuMobile from "$store/islands/Header/MenuMobile.tsx";
import MenuDesktop from "$store/islands/Header/MenuDesktop.tsx";

import { LoginButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonShopify from "$store/islands/Header/Cart/shopify.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { getCustomerAccessToken } from "$store/utils/user.ts";

export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

export interface TopbarLink {
  text: string;
  url: string;
}

export interface Props {
  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, "platform">;

  /** @title Logo */
  logo?: Logo;
  toptext?: string;
  topbarlinks?: TopbarLink[];
}

const DEFAULT_PROPS = {
  logo: {
    src: "https://fakeimg.pl/264x66/625afa/ffffff",
    alt: "",
  },
  toptext:
    '<p class="text-white text-xs leading-normal uppercase">GANHE <span class="text-[#6DC04B]">5% off</span> em sua primeira compra</p>',
  topbarlinks: [
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

//@ts-ignore ignore
export const loader = (props: Props, _req: Request) => {
  const { searchbar, logo, toptext, topbarlinks } = {
    ...DEFAULT_PROPS,
    ...props,
  };
  const token = getCustomerAccessToken(_req.headers);

  return { searchbar, logo, toptext, topbarlinks, token };
};

function Header({
  searchbar,
  logo,
  toptext,
  topbarlinks,
  token,
}: SectionProps<ReturnType<typeof loader>>) {
  const platform = usePlatform();

  return (
    <header class="h-[98.5px] lg:h-[144px]">
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />

      <div class="fixed w-full z-50">
        <Drawers platform={platform} token={token}>
          <div></div>
        </Drawers>

        <div class="bg-[#1E274A] flex py-2 px-[30px] justify-center lg:justify-between">
          <RichText text={toptext} />
          <div class="hidden lg:flex lg:gap-[27px]">
            {topbarlinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                class="text-white text-xs leading-normal uppercase hover:underline"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div class="bg-[#2E385F] p-[13px] lg:pt-[19px] lg:pb-[25px] lg:px-[30px] flex items-center justify-between lg:justify-start">
          <div class="lg:hidden">
            <MenuMobile />
          </div>

          <div class="lg:hidden h-[27px] lg:h-[34px]">
            <SearchButton />
          </div>

          <a href="/">
            <img
              src={/* logo.src */ "https://fakeimg.pl/264x66/625afa/ffffff"}
              alt={logo.alt}
              class="max-w-[154px] lg:max-w-none lg:mr-[60px]"
            />
          </a>

          <div class="lg:hidden h-[23px]">
            {
              /* <a
              class="btn btn-circle btn-sm btn-ghost"
              href="/account"
              aria-label="Account"
            >
              <Icon id="User" size={24} strokeWidth={0.4} />
            </a> */
            }
            <LoginButton />
          </div>

          <div class="lg:hidden h-[27px]">
            <CartButtonShopify />
          </div>

          <div class="hidden lg:flex justify-between flex-grow">
            <div>
              <MenuDesktop />
            </div>

            <div class="hidden lg:flex gap-[10px] items-center justify-between w-full max-w-[263px]">
              <SearchButton />
              {
                /* <a
                class="btn btn-circle btn-sm btn-ghost"
                href="/account"
                aria-label="Account"
              >
                <Icon id="User" size={24} strokeWidth={0.4} />
              </a> */
              }
              <LoginButton />
              <CartButtonShopify />
            </div>
          </div>

          <Searchbar searchbar={searchbar} />
        </div>
      </div>
    </header>
  );
}

export default Header;
