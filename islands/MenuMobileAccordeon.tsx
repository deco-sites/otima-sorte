import { useState, useEffect } from "preact/hooks";

const MenuMobileAccordeon = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("isOpen", isOpen);
  }, [isOpen]);

  return (
    <div>
      <div
        class="flex items-center justify-between bg-[#2E385F] px-[30px] border-b border-white"
        onClick={toggleAccordion}
      >
        <p class="text-white text-[15px] font-medium leading-normal">
          NOSSOS PRODUTOS
        </p>
        <span class="text-white text-[26px] font-semibold leading-normal">
          +
        </span>
      </div>
      <div
        class={`transition-all duration-300 px-[56px] ${
          isOpen ? "max-h-[500px] pt-5 pb-[50px]" : "max-h-0 overflow-hidden"
        }`}
      >
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
            {category.displayShowAll && (
              <a
                href={category.url}
                class="text-[#686868] text-xs leading-[14px] font-bold underline mt-[29px] block"
              >
                VER TODOS
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuMobileAccordeon;
