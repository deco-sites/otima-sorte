import { default as MenuButtonComponent } from "$store/components/header/Buttons/Menu.tsx";
import { default as SearchButtonComponent } from "$store/components/header/Buttons/Search.tsx";
import { default as LoginButtonComponent } from "$store/components/header/Buttons/Login.tsx";

export function MenuButton() {
  return <MenuButtonComponent />;
}

export function SearchButton() {
  return <SearchButtonComponent />;
}

export function LoginButton() {
  return <LoginButtonComponent />;
}
