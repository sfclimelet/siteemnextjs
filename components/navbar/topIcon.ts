import { cloneIcon } from "../../utils/cloneIcons";

export function setupIcons() {
  if (typeof window === "undefined") return () => {};

  const parents = document.querySelectorAll<HTMLElement>(
    ".nav-item.dropdown:not(#LI-search)"
  );

  const removers: Array<() => void> = [];

  parents.forEach((parent) => {
    const toggleBtn = parent.querySelector<HTMLElement>(
      "[data-bs-toggle='dropdown']"
    );
    const topIcon = parent.querySelector<HTMLElement>(".top-icon");

    if (!toggleBtn || !topIcon) return;

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

    removers.push(() => {
      parent.removeEventListener("show.bs.dropdown", onShow);
      parent.removeEventListener("hide.bs.dropdown", onHide);
      topIcon.removeEventListener("click", onClick);
    });
  });

  return () => removers.forEach((fn) => fn());
}