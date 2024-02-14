import { VNode } from "../../constants.tsx";
import { Section } from "deco/blocks/section.ts";

/**
 * @title Grid
 */
export interface Props {
  children?: VNode | null;
  sectionChildrens?: Section[];
}

function Grid({ sectionChildrens, children }: Props) {
  return (
    <div class="lg:px-[15px] py-[30px] lg:pb-[50px]">
      <div class="flex flex-col lg:flex-row lg:justify-between max-w-[1270px] mx-auto lg:gap-[10px]">
        {children}
        {sectionChildrens &&
          sectionChildrens.map((section) => (
            <section.Component {...section.props} />
          ))}
      </div>
    </div>
  );
}

export default Grid;
