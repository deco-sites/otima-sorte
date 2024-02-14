import { VNode } from "../../constants.tsx";
import { Section } from "deco/blocks/section.ts";

/**
 * @title PDPColumn
 */
export interface Props {
  children?: VNode | null;
  sectionChildrens?: Section[];
}

function PDPColumn({ sectionChildrens, children }: Props) {
  return (
    <div class="flex flex-col">
      {children}
      {sectionChildrens &&
        sectionChildrens.map((section) => (
          <section.Component {...section.props} />
        ))}
    </div>
  );
}

export default PDPColumn;
