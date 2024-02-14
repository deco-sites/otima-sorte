import { useUI } from "$store/sdk/useUI.ts";

export default function SearchButton() {
  const { displaySearchPopup } = useUI();

  return (
    <button
      onClick={() => {
        displaySearchPopup.value = !displaySearchPopup.value;
      }}
    >
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
      <div class="hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            d="M15.6358 27.5075C21.8951 27.5075 26.9692 22.4334 26.9692 16.1742C26.9692 9.91493 21.8951 4.84082 15.6358 4.84082C9.3766 4.84082 4.30249 9.91493 4.30249 16.1742C4.30249 22.4334 9.3766 27.5075 15.6358 27.5075Z"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.8024 30.3407L23.6399 24.1782"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}
