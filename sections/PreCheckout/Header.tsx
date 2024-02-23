const Header = () => {
  return (
    <div class="bg-[#2E385F] pt-[13px] pb-[21px] px-3 lg:px-[32px] lg:py-6">
      <div class="flex items-center justify-between">
        <img src="https://fakeimg.pl/264x66" alt="" />
        <div class="flex items-center gap-[10px] max-w-[129px] lg:max-w-none">
          <div>
            <svg
              width="27"
              height="33"
              viewBox="0 0 27 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3408 31.5126C13.3408 31.5126 25.3408 25.6049 25.3408 16.7434V6.40489L13.3408 1.97412L1.34082 6.40489V16.7434C1.34082 25.6049 13.3408 31.5126 13.3408 31.5126Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.5716 13.051L12.2254 20.4356L9.34082 17.079"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="text-xs leading-4 font-extrabold text-white">
            COMPRA 100% SEGURA{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
