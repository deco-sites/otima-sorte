import { useEffect, useState } from "preact/hooks";

const SearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const url = window.location.href;
    const searchParams = new URLSearchParams(new URL(url).search);
    const termFromParams = searchParams.get("q") ?? "";
    setSearchTerm(termFromParams);
  }, []);

  return (
    <h1 class="text-[#1E274A] text-center text-[22px] font-semibold leading-normal mb-[13px] lg:text-[26px] lg:mb-[18px]">
      {searchTerm}
    </h1>
  );
};

export default SearchTerm;
