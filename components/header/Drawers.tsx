import Cart from "$store/components/minicart/Cart.tsx";
import Button from "$store/components/ui/Button.tsx";
import Drawer from "$store/components/ui/Drawer.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ComponentChildren } from "preact";
import { lazy, Suspense } from "preact/compat";
import LoginForm from "$store/islands/LoginForm.tsx";

export interface Props {
  /**
   * @ignore_gen true
   */
  children?: ComponentChildren;
  platform: ReturnType<typeof usePlatform>;
}

const Aside = ({
  children,
}: {
  onClose?: () => void;
  children: ComponentChildren;
}) => (
  <div class="bg-white h-full w-[calc(100vw-20px)] max-w-[400px] flex flex-col">
    <Suspense
      fallback={
        <div class="w-screen flex items-center justify-center">
          <span class="loading loading-ring" />
        </div>
      }
    >
      {children}
    </Suspense>
  </div>
);

function Drawers({ children, platform }: Props) {
  const { displayCart, displayLogin } = useUI();

  return (
    <>
      <Drawer
        class="drawer-end"
        open={displayLogin.value !== false}
        onClose={() => (displayLogin.value = false)}
        aside={
          <Aside>
            <LoginForm />
          </Aside>
        }
      >
        {children}
      </Drawer>
      <Drawer
        class="drawer-end"
        open={displayCart.value !== false}
        onClose={() => (displayCart.value = false)}
        aside={
          <Aside>
            <Cart platform={platform} />
          </Aside>
        }
      >
        {children}
      </Drawer>
    </>
  );
}

export default Drawers;
