import { cloneIcon } from "../../utils/cloneIcons";

export function setupIcons() {
  if (typeof window === "undefined") return () => {};

  const parents = Array.from(
    document.querySelectorAll<HTMLElement>(".nav-item.dropdown")
  );

  const removers: Array<() => void> = [];

  parents.forEach((parent) => {
    // IGNORA SEARCH
    if (parent.id === "LI-search") return;

    const toggleBtn = parent.querySelector<HTMLElement>(
      "[data-bs-toggle='dropdown']"
    );
    const topIcon = parent.querySelector<HTMLElement>(".top-icon");

    if (!toggleBtn || !topIcon) return;

    const onShow = () => {
      cloneIcon(toggleBtn, topIcon);
      toggleBtn.classList.add("is-active");
    };

    const onHide = () => {
      toggleBtn.classList.remove("is-active");
    };

    const onTopIconClick = () => {
      toggleBtn.click();
    };

    parent.addEventListener("show.bs.dropdown", onShow as EventListener);
    parent.addEventListener("hide.bs.dropdown", onHide as EventListener);
    topIcon.addEventListener("click", onTopIconClick);

    removers.push(() =>
      parent.removeEventListener("show.bs.dropdown", onShow as EventListener)
    );
    removers.push(() =>
      parent.removeEventListener("hide.bs.dropdown", onHide as EventListener)
    );
    removers.push(() =>
      topIcon.removeEventListener("click", onTopIconClick)
    );
  });

  return () => {
    removers.forEach((fn) => {
      try {
        fn();
      } catch {}
    });
  };
}