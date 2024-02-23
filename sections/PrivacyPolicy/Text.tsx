import RichText from "$store/sections/Content/RichText.tsx";

export interface Props {
  title?: string;
  /** @format textarea */
  text?: string;
}

const Text = ({ title, text }: Props) => {
  return (
    <div class="mb-[58px] lg:mb-[134px]">
      <div class="max-w-[1270px] mx-auto">
        <p class="text-sm leading-5 font-bold mb-[25px] text-[#444444]">
          {title}
        </p>
        <RichText class="text-sm leading-5 text-[#444444]" text={text} />
      </div>
    </div>
  );
};

export default Text;
