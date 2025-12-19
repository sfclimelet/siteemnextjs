import { cloneIcon } from "../../utils/cloneIcons";

export function setupIconSearch() {
  if (typeof window === "undefined") return () => {};

  const parent = document.querySelector<HTMLElement>("#LI-search");
  if (!parent) return () => {};

  const toggleBtn = parent.querySelector<HTMLElement>(
    "[data-bs-toggle='dropdown']"
  );
  const topIcon = parent.querySelector<HTMLElement>(".top-icon-search");

  if (!toggleBtn || !topIcon) return () => {};

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

  return () => {
    parent.removeEventListener("show.bs.dropdown", onShow as EventListener);
    parent.removeEventListener("hide.bs.dropdown", onHide as EventListener);
    topIcon.removeEventListener("click", onTopIconClick);
  };
}