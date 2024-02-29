import Searchbar, {
  Props as SearchbarProps,
} from "$store/components/search/Searchbar.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export interface Props {
  searchbar?: SearchbarProps;
}

function SearchbarModal({ searchbar }: Props) {
  const { displaySearchPopup } = useUI();

  if (!searchbar) {
    return null;
  }

  return (
    <Modal
      loading="lazy"
      open={displaySearchPopup.value}
      onClose={() => (displaySearchPopup.value = false)}
    >
      <div class="absolute top-[98.5px] lg:top-[144px] w-full px-[10px]">
        <Searchbar {...searchbar} />
      </div>
    </Modal>
  );
}

export default SearchbarModal;
