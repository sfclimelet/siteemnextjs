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
    topIcon.style.display = "flex";
    toggleBtn.classList.add("is-active");
  };

  const onHide = () => {
    topIcon.style.display = "none";
    toggleBtn.classList.remove("is-active");
  };

  const onClick = () => toggleBtn.click();

  parent.addEventListener("show.bs.dropdown", onShow);
  parent.addEventListener("hide.bs.dropdown", onHide);
  topIcon.addEventListener("click", onClick);

  return () => {
    parent.removeEventListener("show.bs.dropdown", onShow);
    parent.removeEventListener("hide.bs.dropdown", onHide);
    topIcon.removeEventListener("click", onClick);
  };
}