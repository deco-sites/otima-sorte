export interface Props {
  title?: string;
}

const PageTitle = ({ title }: Props) => {
  return (
    <div class="mt-[18px] mb-[25px] lg:my-[34px]">
      <h1 class="text-xl leading-[23px] font-semibold text-center text-[#1E274A] lg:text-[26px] lg:leading-[30px]">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
