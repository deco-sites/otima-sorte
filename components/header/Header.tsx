import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import RichText from "$store/sections/Content/RichText.tsx";

import MenuMobile from "$store/islands/Header/MenuMobile.tsx";
import MenuDesktop from "$store/islands/Header/MenuDesktop.tsx";

export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}
export interface Buttons {
  hideSearchButton?: boolean;
  hideAccountButton?: boolean;
  hideWishlistButton?: boolean;
  hideCartButton?: boolean;
}

export interface TopbarLink {
  text: string;
  url: string;
}

export interface Props {
  alerts: string[];

  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, "platform">;

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;

  buttons: Buttons;

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

function Header(props: Props) {
  const { alerts, searchbar, navItems, logo, buttons, toptext, topbarlinks } = {
    ...DEFAULT_PROPS,
    ...props,
  };
  const platform = usePlatform();
  const items = navItems ?? [];

  return (
    <header /* style={{ height: headerHeight }} */ class="lg:h-[144px]">
      {
        /* <Drawers menu={{ items }} searchbar={searchbar} platform={platform}>
        <div class="bg-base-100 fixed w-full z-50">
          {alerts.length > 0 && <Alert alerts={alerts} />}
          <Navbar
            items={items}
            searchbar={searchbar && { ...searchbar, platform }}
            logo={logo}
            buttons={buttons}
          />
        </div>
      </Drawers> */
      }
      <div class="fixed w-full z-50">
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

          <div class="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M12.0851 21.0843C16.9393 21.0843 20.8743 17.1492 20.8743 12.2951C20.8743 7.44093 16.9393 3.50586 12.0851 3.50586C7.23097 3.50586 3.2959 7.44093 3.2959 12.2951C3.2959 17.1492 7.23097 21.0843 12.0851 21.0843Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.0716 23.2816L18.2925 18.5024"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <img
            src={/* logo.src */ "https://fakeimg.pl/264x66/625afa/ffffff"}
            alt={logo.alt}
            class="max-w-[154px] lg:max-w-none lg:mr-[60px]"
          />

          <div class="lg:hidden">
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
          </div>

          <div class="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M7.15247 3.09521L3.79248 7.5752V23.2551C3.79248 23.8492 4.02848 24.419 4.44856 24.839C4.86864 25.2591 5.43839 25.4951 6.03247 25.4951H21.7124C22.3065 25.4951 22.8762 25.2591 23.2963 24.839C23.7164 24.419 23.9524 23.8492 23.9524 23.2551V7.5752L20.5924 3.09521H7.15247Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.79248 7.5752H23.9524"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.3525 12.0552C18.3525 13.2433 17.8805 14.3828 17.0404 15.223C16.2002 16.0632 15.0607 16.5352 13.8726 16.5352C12.6844 16.5352 11.5449 16.0632 10.7047 15.223C9.86457 14.3828 9.39258 13.2433 9.39258 12.0552"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="hidden lg:block">
            <MenuDesktop />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
