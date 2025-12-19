export function setupDropdownTopIcon() {
  if (typeof window === "undefined") return () => {};

  const dropdownParents = Array.from(
    document.querySelectorAll<HTMLElement>(".nav-item.dropdown")
  );

  const removers: Array<() => void> = [];

  dropdownParents.forEach((parent) => {

    const toggleBtn =
      parent.querySelector<HTMLButtonElement>("[data-bs-toggle='dropdown']");
    const dropdownMenu =
      parent.querySelector<HTMLElement>(".dropdown-menu");
    const topIcon =
      parent.querySelector<HTMLElement>(".top-icon");

    if (!toggleBtn || !dropdownMenu || !topIcon) return;

    const onShow = () => {
      const icon = toggleBtn.querySelector("svg, i");
      if (icon) {
        topIcon.innerHTML = "";
        topIcon.appendChild(icon.cloneNode(true));
      }

      toggleBtn.classList.add("is-active");
    };

    const onHide = () => {
      toggleBtn.classList.remove("is-active");
    };

    parent.addEventListener("show.bs.dropdown", onShow as EventListener);
    parent.addEventListener("hide.bs.dropdown", onHide as EventListener);

    // clique no top-icon fecha o dropdown
    topIcon.addEventListener("click", () => toggleBtn.click());

    removers.push(() =>
      parent.removeEventListener("show.bs.dropdown", onShow as EventListener)
    );
    removers.push(() =>
      parent.removeEventListener("hide.bs.dropdown", onHide as EventListener)
    );
  });

  return () => removers.forEach(fn => fn());
}