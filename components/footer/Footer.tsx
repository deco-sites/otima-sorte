import BackToTop from "$store/components/footer/BackToTop.tsx";
import ColorClasses from "$store/components/footer/ColorClasses.tsx";
import Divider from "$store/components/footer/Divider.tsx";
import ExtraLinks from "$store/components/footer/ExtraLinks.tsx";
import FooterItems from "$store/components/footer/FooterItems.tsx";
import Logo from "$store/components/footer/Logo.tsx";
import MobileApps from "$store/components/footer/MobileApps.tsx";
import PaymentMethods from "$store/components/footer/PaymentMethods.tsx";
import RegionSelector from "$store/components/footer/RegionSelector.tsx";
import Social from "$store/components/footer/Social.tsx";
import Newsletter from "$store/islands/Newsletter.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import PoweredByDeco from "apps/website/components/PoweredByDeco.tsx";
import RichText from "$store/sections/Content/RichText.tsx";
import NewsletterShopify from "$store/islands/NewsletterShopify.tsx";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export interface SocialItem {
  label:
    | "Discord"
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "Tiktok"
    | "Twitter";
  link: string;
}

export interface PaymentItem {
  label: "Diners" | "Elo" | "Mastercard" | "Pix" | "Visa";
}

export interface MobileApps {
  /** @description Link to the app */
  apple?: string;
  /** @description Link to the app */
  android?: string;
}

export interface RegionOptions {
  currency?: Item[];
  language?: Item[];
}

export interface NewsletterForm {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Layout {
  backgroundColor?:
    | "Primary"
    | "Secondary"
    | "Accent"
    | "Base 100"
    | "Base 100 inverted";
  variation?:
    | "Variation 1"
    | "Variation 2"
    | "Variation 3"
    | "Variation 4"
    | "Variation 5";
  hide?: {
    logo?: boolean;
    newsletter?: boolean;
    sectionLinks?: boolean;
    socialLinks?: boolean;
    paymentMethods?: boolean;
    mobileApps?: boolean;
    regionOptions?: boolean;
    extraLinks?: boolean;
    backToTheTop?: boolean;
  };
}

interface Image {
  image: ImageWidget;
  alt?: string;
}

export interface Props {
  newsletter?: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: NewsletterForm;
  };
  logo?: Image;
  socialIcons?: Image[];
  sections?: Section[];
  payment?: {
    title?: string;
    icons?: Image[];
  };
  security?: {
    title?: string;
    icons?: Image[];
  };
  poweredIcons?: Image[];
  /** @format textarea */
  textBottom?: string;
}

const DEFAULT_PROPS = {
  newsletter: {
    title: "Newsletter",
    description: "",
    form: { placeholder: "", buttonText: "", helpText: "" },
  },
  logo: {
    image: "https://fakeimg.pl/264x66/625afa/ffffff",
    alt: "logo",
  },
  socialIcons: [
    {
      image: "https://fakeimg.pl/28x28",
      alt: "icon",
    },
    {
      image: "https://fakeimg.pl/28x28",
      alt: "icon",
    },
  ],
  sections: [
    {
      label: "LABEL",
      items: [
        {
          href: "/",
          label: "Item",
        },
        {
          href: "/",
          label: "Item",
        },
      ],
    },
    {
      label: "LABEL",
      items: [
        {
          href: "/",
          label: "Item",
        },
        {
          href: "/",
          label: "Item",
        },
      ],
    },
    {
      label: "LABEL",
      items: [
        {
          href: "/",
          label: "Item",
        },
        {
          href: "/",
          label: "Item",
        },
        {
          href: "/",
          label: "Item",
        },
      ],
    },
    {
      label: "LABEL",
      items: [
        {
          href: "/",
          label: "Item",
        },
        {
          href: "/",
          label: "Item",
        },
        {
          href: "/",
          label: "Item",
        },
      ],
    },
  ],
  payment: {
    title: "PAGAMENTO",
    icons: [
      {
        image: "https://fakeimg.pl/40x40",
        alt: "icon",
      },
      {
        image: "https://fakeimg.pl/40x40",
        alt: "icon",
      },
      {
        image: "https://fakeimg.pl/40x40",
        alt: "icon",
      },
      {
        image: "https://fakeimg.pl/40x40",
        alt: "icon",
      },
      {
        image: "https://fakeimg.pl/40x40",
        alt: "icon",
      },
      {
        image: "https://fakeimg.pl/40x40",
        alt: "icon",
      },
      {
        image: "https://fakeimg.pl/40x40",
        alt: "icon",
      },
    ],
  },
  security: {
    title: "SITE SEGURO",
    icons: [
      {
        image: "https://fakeimg.pl/110x32",
        alt: "icon",
      },
    ],
  },
  poweredIcons: [
    {
      image: "https://fakeimg.pl/120x60",
      alt: "icon",
    },
    {
      image: "https://fakeimg.pl/63x43",
      alt: "icon",
    },
  ],
  textBottom:
    "<p>Copyright @ Ótima Ajuda 2023 - Todos os direitos reservados.<br/>CNPJ 00.000.000/0000-00 / Endereço Exemplo teste, 1000 - Bairro, Estado - UF 00000-000, Brasil</p>",
};

function Footer(props: Props) {
  const {
    newsletter,
    logo,
    socialIcons,
    sections,
    payment,
    security,
    poweredIcons,
    textBottom,
  } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <footer>
      <NewsletterShopify />
      <div class="">
        <div class="bg-[#2E385F] pt-[17px] pb-5 lg:px-5">
          <div class="max-w-[1270px] mx-auto flex flex-col px-5 lg:flex-row lg:px-0 lg:mb-11">
            <div class="lg:mr-[13.07%] flex flex-col items-center gap-[27px] mb-10 lg:mb-0 lg:items-start">
              <img src={logo?.image} alt={logo?.alt} />
              <div class="flex gap-5">
                {socialIcons?.map((icon, index) => (
                  <img src={icon.image} alt={icon.alt} key={index} />
                ))}
              </div>
            </div>
            <div>
              <FooterItems sections={sections} />
            </div>
          </div>
          <div class="max-w-[1270px] mx-auto px-5 mb-5 lg:flex justify-between items-center lg:px-0 lg:mb-[54px]">
            <div class="lg:flex gap-[95px]">
              <div class="flex flex-col mb-7 lg:flex-row lg:items-center lg:gap-[25px] lg:mb-0">
                <p class="text-white text-center text-[11px] leading-normal uppercase mb-3 lg:mb-0">
                  {payment?.title}
                </p>
                <div class="flex justify-center gap-[10px]">
                  {payment?.icons?.map((icon, index) => (
                    <img src={icon.image} alt={icon.alt} key={index} />
                  ))}
                </div>
              </div>
              <div class="flex flex-col mb-7 lg:flex-row lg:items-center lg:gap-[25px] lg:mb-0">
                <p class="text-white text-center text-[11px] leading-normal uppercase mb-3 lg:mb-0">
                  {security?.title}
                </p>
                <div class="flex justify-center gap-[10px]">
                  {security?.icons?.map((icon, index) => (
                    <img src={icon.image} alt={icon.alt} key={index} />
                  ))}
                </div>
              </div>
            </div>
            <div class="flex justify-center gap-10">
              {poweredIcons?.map((icon, index) => (
                <img src={icon.image} alt={icon.alt} key={index} />
              ))}
            </div>
          </div>
          <div class="px-5 flex justify-center lg:px-0">
            {/* <RichText text={textBottom} /> */}
            <p class="text-white text-[10px] leading-[18px] lg:text-center">
              Copyright @ Ótima Ajuda 2023 - Todos os direitos reservados.
              <br />
              CNPJ 00.000.000/0000-00 / Endereço Exemplo teste, 1000 - Bairro,
              Estado - UF 00000-000, Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
